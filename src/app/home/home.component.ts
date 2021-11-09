import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any[]=[]
  Arr:any[]=[]
  searchItems:any[]=[]
  parent:boolean=true
  searchItemsBehavior = new BehaviorSubject<any>([])
  constructor(private _ApiService:ApiService) { }
  ngOnInit(): void {
    this._ApiService.getAPi('trending').subscribe((res)=>{
      this.data=res.data
    })
    
  }

  addDataTfav(item:any): void{
    this.Arr.push(item)
    localStorage.setItem('favorits',JSON.stringify(this.Arr))
  }
  filter(query: any){
    if(query){
     this.searchItems =
      this.data.filter(
        p =>
        p.title.toLowerCase().includes(query.toLowerCase())
        )
    }else{
      this.searchItems = []
    }


    










    

/*
    this.data.map((`x:any)=>{
      if(x.title.includes(query)){
        this.searchItemsBehavior.next(x)
        this.searchItems.push(this.searchItemsBehavior.value)
      }

    })
    */
  

  }
  
  



    
      // this.data.map(i:any,index:number){ //map
      //   let name = data.i.name
      //   if(name.Include(inpVal)){ //crude
      //     -haia3d (url) w hai2th fi property
      //     this.peoperty = data.i.name
      //     -whaikon fi img btzhr law property fiha url
      //     ngif='property'
      //     -fi halt ino fih kteer bInclude InpVal ha5doh hahth fi array wb3deen ha loop 5alleeh
      //     array.push(name.url)
      //     -ha2tag Aaml assign l asmObjectJwah al arrray
          
        
      //DONE
     

  













// replace icons
// dowenload the icons with the good size
// onclick want to occurs a popUp to show the details of the gifImg
// search about giphs img
// add the typs of giph api
}