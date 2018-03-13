from django.db import models
from django.core.files import File
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.models import User
import requests

# Create your models here.

fs = FileSystemStorage(location='/apps')
#Represents external applications (to be uploaded)
class Application(models.Model):
    author = models.ForeignKey(User)
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField(max_length=255)
    licences = models.CharField(max_length=255) 
    project_page = models.URLField(max_length=255)
    app_tarball = models.FileField(storage=fs, blank=True)
    app_repo_url = models.URLField(max_length=255, blank=True)
    
    updated_at = models.DateTimeField(auto_now=True)
    def download_tar(self, link):
        # get the remote repo from app_repo_url and create the command string
        print("*********************printing link now***************")
        print(link)
        r = requests.get(link, verify=False)
        with open("/apps/master2.tar.gz", "wb") as f:
            f.write(r.content)

        reopen = open("/apps/master2.tar.gz", "rb")
        self.app_tarball = File(reopen)

        # could also use Django file storage functions to directly save the file to fs
        # wget the remote repo, check the command was executed correctly and we have the tar, and attach it to app_folder