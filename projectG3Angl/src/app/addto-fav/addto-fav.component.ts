import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Addfav } from '../addfav';
import { AddtoFavService } from '../addto-fav.service';

@Component({
  selector: 'app-addto-fav',
  templateUrl: './addto-fav.component.html',
  styleUrls: ['./addto-fav.component.scss'],
})
export class AddtoFavComponent implements OnInit {
  selected: boolean = false;
  uid = 2;
  qid = 2;
  mylist: any;
  constructor(private myserv: AddtoFavService, private serv: Addfav) {
    this.myserv.getMyFavlist(this.uid).subscribe((res: any) => {
      this.mylist = res;
      console.log('favlist', this.mylist.length);
    });


    
  }
  favList() {
    alert(this.mylist.length);
  }
  ngOnInit(): void {}

  // fav = {
  //   "quizid": this.qid,
  //   "userid": this.uid,
  //   "status": true
  // }
  toggleSelected(): void {
    // this.selected = this.serv.favToggel(this.fav);
  }
}
