import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Profile} from '../../shared/profile-service/models/profile';
import {AddProfileService} from '../../shared/profile-service/services/add-profile.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {matchPasswordValidator} from '../../shared/validators/custom-validators';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-profile-register',
  templateUrl: './profile-register.component.html',
  styleUrls: ['./profile-register.component.scss']
})
export class ProfileRegisterComponent implements OnInit {
  @ViewChild('template') template; // Gets the element with a the tag template '#template' in the html file.
  modalRef: BsModalRef;
  file;
  showCropper = false;
  isLoading = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImageEvent: ImageCroppedEvent;

  profileForm = new FormGroup({
    pictureUrl: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    description: new FormControl('', [])
  }, [
    matchPasswordValidator()
  ]);

  constructor(private profileAddService: AddProfileService,
              private modalService: BsModalService,
              private router: Router) { }

  ngOnInit() {
  }

  save() {
    const profile = this.profileForm.value;

    const newProfile: Profile = { username: profile.username, password: profile.password, description: profile.description}

    let image = this.file;
    if (this.croppedImage) {
      image = new File([this.croppedImageEvent.file], this.file.name, { type: this.file.type });
    }

    this.isLoading = true;
    this.profileAddService.addProfile(newProfile, image).subscribe(next => {
      this.modalRef.hide();
      this.isLoading = false;
      this.router.navigate(['profile/details/' + next.id]);
    }, err => {
      this.isLoading = false;
      alert(err);
    });
  }

  /**
   * Shows new modal view the template from .html and saves the reference.
   */
  public open() {
    this.modalRef = this.modalService.show(this.template);
  }

  /**
   * Hides the modal.
   */
  close() {
    this.modalRef.hide();
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageEvent = event;
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    this.showCropper = true;
  }
  loadImageFailed() {
    this.showCropper = false;
  }
}
