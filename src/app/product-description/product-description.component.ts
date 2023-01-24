import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faTag,faBoltLightning ,faShareFromSquare} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {
  faTag=faTag;
  faBoltLightning=faBoltLightning;
  faShareFromSquare=faShareFromSquare;
  productDetailsData: any;
  image: any;
  faFacebook = faFacebookF;
  faTwitter=faTwitter;
  faInstagram = faInstagramSquare;
  currentRate=3;
constructor(private activatedRoute:ActivatedRoute){

}
ngOnInit(){
  this.activatedRoute.queryParams.subscribe(data=>{
    this.productDetailsData=data;
    this.image=this.productDetailsData.image
   console.log('params !!!!!!data',data)
   

  })
}
}
