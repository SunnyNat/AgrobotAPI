import { Component, OnInit } from '@angular/core';
import { MissionDetailService } from 'src/app/shared/mission-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {

  constructor(private service: MissionDetailService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
    form.resetForm();
    }
    this.service.formData = {
      Id: 0,
      Name: '',
      CreatedBy: '',
      Greenhouse: '',
      Parameters: ''
    };
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.Id === 0) {
      this.insertRecord(form);
     } else {
       this.updateRecord(form);
     }
    this.router.navigate(['/missioncontrol']);
  }
    insertRecord(form: NgForm) {
    this.service.postMissionDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Mission Detail Register');
        // this.service.refreshlist();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putMissionDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Mission Detail Register');
        // this.service.refreshlist();
      },
      err => {
        console.log(err);
      }
    );
  }


}
