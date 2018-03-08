from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from uploader.forms import UploadFileForm
from django.contrib.auth.decorators import login_required

@login_required
def uploader(request):
    if request.method == 'POST':
        form = UploadFileForm(request.POST, request.FILES)
        # if app_repo_url is populated and app_folder is not, then form.download_tar(). if app_folder is populated and app_repo_url is not, then just check validity and save the form. If both are populated at this point, then an error has occurred. (Is there a built in way to check that only one or other of certain fields are returned in a django form?)

        # checking validity should include checking that a tar.gz file is definitely attached to app_folder. app_repo_url, on the other hand, isn't necessary
        if form.is_valid():
            obj = form.save(commit=False)
            obj.author = request.user
            obj.save()
            return HttpResponseRedirect('/success/')
        else:
            return HttpResponseRedirect('/failure/')
    else:
        form = UploadFileForm()

    t = get_template('uploader.html')
    html = t.render(context={"form": form}, request=request)
    return HttpResponse(html)

# Create your views here.
