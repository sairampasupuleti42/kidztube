import { Component, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
export interface UploaderOptions {
  concurrency: number; // number of files uploaded at the same time
  allowedContentTypes?: string[]; // content types allowed (default *)
  maxUploads?: number; // max number of files the user can upload
}

export interface UploadProgress {
  status: UploadStatus; // current status of upload for specific file (Queue | Uploading | Done | Canceled)
  data?: {
    percentage: number; // percentage of upload already completed
    speed: number; // current upload speed per second in bytes
    speedHuman: string; // current upload speed per second in human readable form,
    eta: number; // estimated time remaining in seconds
    etaHuman: string; // estimated time remaining in human readable format
  };
}

export interface UploadFile {
  id: string; // unique id of uploaded file instance
  fileIndex: number; // fileIndex in internal ngx-uploader array of files
  lastModifiedDate: Date; // last modify date of the file (Date object)
  name: string; // original name of the file
  size: number; // size of the file in bytes
  type: string; // mime type of the file
  form: FormData; // FormData object (you can append extra data per file, to this object)
  progress: UploadProgress;
  response?: any; // response when upload is done (parsed JSON or string)
  responseStatus?: number; // response status code when upload is done
  responseHeaders?: { [key: string]: string }; // response headers when upload is done
}

// output events emitted by ngx-uploader
export interface UploadOutput {
  type: 'addedToQueue' | 'allAddedToQueue' | 'uploading' | 'done' | 'removed' | 'start' | 'cancelled' | 'dragOver' | 'dragOut' | 'drop';
  file?: UploadFile;
  nativeFile?: File; // native javascript File object, can be used to process uploaded files in other libraries
}

// input events that user can emit to ngx-uploader
export interface UploadInput {
  type: 'uploadAll' | 'uploadFile' | 'cancel' | 'cancelAll' | 'remove' | 'removeAll';
  url?: string; // URL to upload file to
  method?: string; // method (POST | PUT)
  id?: string; // unique id of uploaded file
  fieldName?: string; // field name (default 'file')
  fileIndex?: number; // fileIndex in internal ngx-uploader array of files
  file?: UploadFile; // uploading file
  data?: { [key: string]: string | Blob }; // custom data sent with the file
  headers?: { [key: string]: string }; // custom headers
  concurrency?: number; // concurrency of how many files can be uploaded in parallel (default is 0 which means unlimited)
  withCredentials?: boolean; // apply withCredentials option
}
@Component({
  selector: 'app-admin-video-upload',
  templateUrl: './admin-video-upload.component.html',
  styleUrls: ['./admin-video-upload.component.css']
})

export class AdminVideoUploadComponent implements OnInit {
  videoForm: FormGroup;
  submitted = false;
  reader: any;
  options: UploaderOptions;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  base64textString: any;
  @ViewChild('customFile') video: ElementRef;
  constructor(private formBuilder: FormBuilder) {
    this.videoForm = this.formBuilder.group({
      video_title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      video_category: ['', Validators.required],
      video_file: [''],
      video_status: ['', [Validators.required]],
      video_description: ['', [Validators.required]]
    });

  }

  get f() { return this.videoForm.controls; }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }
  ngOnInit() {

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.videoForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.videoForm.value))
  }

}
