import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileUploader } from "ng2-file-upload";
import { Observable } from "rxjs";

@Component({
  selector: 'app-multiple-file-upload-task',
  templateUrl: './multiple-file-upload-task.component.html',
  styleUrls: ['./multiple-file-upload-task.component.css']
})

export class MultipleFileUploadTaskComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;

  public uploadForm: FormGroup;        // Form for uploading files ( document type and document )
  public base64UploadForm: FormGroup;
  public uploadedFiles = [];
  public fileList: FileList;
  public uploader: FileUploader = new FileUploader({      // INITIALISING THE FILE UPLOADER NAME
  });

  constructor(
    private fb: FormBuilder,       // ALIASING NAME FOR FORM BUILDER
  ) { }

  ngOnInit() {
    this.uploadForm = this.fb.group({                         // INITIALISING THE FORM WITH CONTROLS
      document: [null, null],
      type: [null, Validators.compose([Validators.required])]
    });

    this.base64UploadForm = this.fb.group({                         // INITIALISING THE FORM WITH CONTROLS
      fileDocument: [null, null],
      documentType: [null, Validators.compose([Validators.required])]
    });
  }

  // SUBMIT BUTTON FOR UPLOADING SELECTED FILES 

  uploadSubmit() {
    console.log(this.uploader)
    if (this.uploader.queue.length) {
      for (var i = 0; i < this.uploader.queue.length; i++) {
        let fileItem = this.uploader.queue[i]._file;
        if (fileItem.size > 10000) {
          alert("Each File should be less than 10 MB of size.");
          return;
        }
      }
      for (var j = 0; j < this.uploader.queue.length; j++) {
        let data = new FormData();
        let fileItem = this.uploader.queue[j]._file;
        console.log(fileItem);
        console.log(fileItem.name);
        data.append('file', fileItem);
        data.append('fileSeq', 'seq' + j);
        data.append('dataType', this.uploadForm.controls.type.value);
      }
      this.uploader.clearQueue();
    } else {
      alert("please select files")
    }
  }

  docError() {
    return this.uploadForm.get('type').hasError('required') ? 'Select one value' :
      '';
  }
  docListError() {
    return this.uploadForm.get('document').hasError('required') ? 'no file choosen' :
      '';
  }

  onUpload(event) {
    console.log(event)
    this.uploadedFiles = Array.from(event.target.files);  // declaring the type
    this.fileList = event.target.files;
    const reader = new FileReader();
    if (this.fileList.length > 0) {
      let file: File = this.fileList[0];
      this.base64UploadForm.value.fileDocument = this.fileList[0].name;
      reader.onload = (e: any) => {
        this.base64UploadForm.value.fileDocument = e.currentTarget.result
        console.log(this.base64UploadForm.value.fileDocument)
      }
      reader.readAsDataURL(file)
    }
   
  }
  deleteRecord(i) {
    console.log(typeof this.uploadedFiles, this.fileList[0])
    // Array.prototype.push.apply( this.uploadedFiles, this.fileList);
    // let array = this.uploadedFiles;
    this.uploadedFiles.splice(i, 1)
    console.log(this.uploadedFiles);
    // this.uploadedFiles.splice(i,1);

  }
  onSubmitUpload() {
    console.log(this.uploadedFiles)
    this.uploadedFiles = []
    this.base64UploadForm.get('fileDocument').setValue(null);
    this.fileInput.nativeElement.value = '';
    alert("uploaded successfully!!!!")

  }



}
