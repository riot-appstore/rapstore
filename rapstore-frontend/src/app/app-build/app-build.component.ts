import {Component, OnInit, Input} from '@angular/core';
import {Application} from '../models';
import {AppService} from '../appservice.service';
import {ActivatedRoute} from '@angular/router';
import {Board} from '../models';
import {NotificationsService} from 'angular2-notifications';
import 'rxjs/Rx' ;
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-app-build',
  templateUrl: './app-build.component.html',
  styleUrls: ['./app-build.component.css']
})
export class AppBuildComponent implements OnInit {
  private selected_board: Board;
  private loading: boolean = false;
  private dots: string = '';
  private timer_id: Timer;
  private poll_id: Timer;
  private error = '';
  private task_id = "";
  private toast;
  @Input() application: Application;

  constructor(private appService: AppService, private route: ActivatedRoute, private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.appService.get(id)
      .subscribe(app => this.application = app);
  }

  onBoardChange(board: Board) {
    this.selected_board = board;
  }

  init_loading() {
    this.loading = true;
    this.error = '';
    this.timer_id = setInterval(val => {
      this.dots += '.';
      if (this.dots.length == 4) {
        this.dots = '';
      }
    }, 700);
  }

  request_build(id, type) {
    this.init_loading();
    this.appService.request_build(id, this.selected_board.id, this.application.name, type).subscribe(
      res => {
        this.toast = this.notificationsService.success(`Building "${this.application.name}"`, 'Please wait...', {
          timeOut: 0,
          clickToClose: false
        });
        this.task_id = res.task_id;
        this.poll_id = setInterval(val => {
          this.appService.check_build(this.task_id).subscribe(
            res => {
              if (res.status == 'SUCCESS') {
                this.notificationsService.remove(this.toast.id);
                this.fetch_file(this.task_id);
              }
              else if (res.status == 'FAILURE') {
                this.notificationsService.remove(this.toast.id);
                this.show_error_toast('Failed to build', `"${this.application.name}" on "${this.selected_board.display_name}"`);
                this.set_error();
              }
            }
          );
        }, 5000);
      }
    );
  }

  show_error_toast(msg: string, reason: string) {
      this.notificationsService.error(msg, reason, {
        clickToClose: true
      });
  }

  fetch_file(task_id) {
    clearInterval(this.poll_id);
    this.appService.fetch_file(task_id).subscribe(
      (response) => { // download file
        let filename = response.headers.get('content-disposition').split('=')[1];
        let blob = new Blob([response.blob()], {type: 'application/octet_stream'});
        clearInterval(this.timer_id);
        this.appService.perform_download(filename, blob);
      }, (err) => {
        this.set_error();
      },
      () => this.clear());
  }

  clear() {
    clearInterval(this.poll_id);
    clearInterval(this.timer_id);
    this.loading = false;
  }

  set_error() {
    this.clear()
    this.error = 'Something went wrong';
  }

}
