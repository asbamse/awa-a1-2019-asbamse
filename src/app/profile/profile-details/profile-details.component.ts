import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/';
import {Profile} from '../../shared/profile-service/models/profile';
import {GetProfileService} from '../../shared/profile-service/services/get-profile.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile;
  errorMessage: string;

  constructor(private profileGetService: GetProfileService,
              private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    profileGetService.getProfile(id).subscribe(next => {
      this.profile = next;
    }, err => {
      this.errorMessage = 'No profile found!';
    });
  }

  ngOnInit() {
  }

}
