import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { MatSnackBar } from '@angular/material/snack-bar/snack-bar';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {


  completeData: any
  userList = [];
  bookIdList = [];
  addBookId: string = ""
  addBookName: string = ""
  addPrice: number
  addAuthor: string = ""
  userName: string = ""
  isAssigned : boolean
  successMessage:string =""
  successUpdateMessage:any
  message : any = [];

  updatedData :any
  // selectedFeatures: any = [];
  constructor(private http: HttpClient,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  allBook() {
    this.http.get('http://localhost:3000/api/getUserAndId')
      .subscribe((books) => {
        this.completeData = books
        console.log('MY user and bookid', this.completeData)
        // return this.completeData
        for (let i in this.completeData) {
          this.userList.push(this.completeData[i].user)
        }
        for (let i in this.completeData) {
          this.bookIdList.push(this.completeData[i].bookid)
        }
        this.userList = this.userList.filter(function (element) {
          return element !== undefined;
        });
        this.bookIdList = this.bookIdList.filter(function (element) {
          return element !== undefined;
        })
        console.log('user list', this.userList);
        console.log('bookid list', this.bookIdList);
        
        
        this.displayBooks()
      })

  }
  displayBooks() {
    this.http.get('http://localhost:3000/api/displayBooks')
      .subscribe((books) => {
        this.completeData = books
        console.log('complete Data =============', this.completeData)
        
        // return this.completeData
      })

  }

  
  

  addBook() {
    console.log('My globle data', this.completeData);
    var formData: any = new FormData();

    formData = {
      bookId: this.addBookId,
      bookName: this.addBookName,
      price: this.addPrice,
      author: this.addAuthor
    }
    console.log('data to be add------------', formData);
    // const httpOptions = {
    //   headers: new HttpHeaders({ 
    //   'Content-Type': 'application/json',
    //   }),
    //   };

    // this.http.post('localhost:3000/api/addBook?id='+this.id+'&bookName='+this.bookName+'&price='+this.price+'&author='+this.author)

    this.http.post('http://localhost:3000/api/addBook', formData)
      .subscribe((data) => {

        console.log('Data added successfully ====================', data);
        
         
      
          this.snackbar.open("Book added successfully",'',{duration : 4000,panelClass: 'notif-success'})

       
        this.displayBooks()
      },(err) =>{
        this.snackbar.open("Oops something broke !! Book details should not empty",'',{duration : 4000,panelClass: 'notif-success'})

      })


  }
  updateBookName() {
    var formData: any = new FormData();

    formData = {
      bookId: this.addBookId,
      newBookName: this.addBookName,

    }
    console.log('data to be add------------', formData);
    this.http.put('http://localhost:3000/api/updateBookNameById', formData)
      .subscribe((data) => {
        console.log('data updated successfully', data);
        this.updatedData = data
        this.snackbar.open("Book name updated successfully",'',{duration : 4000,panelClass: 'notif-success'})

        this.displayBooks()

      },(err) =>{
        this.snackbar.open("Oops something broke !! Book Id should not be null",'',{duration : 4000,panelClass: 'notif-success'})

      })

  }
 
  deleteBook(bookIdForDelete : string) {
    var formData: any = new FormData();

    formData = {
      bookId: bookIdForDelete
    }
    console.log('My deleted book here is', bookIdForDelete)
    console.log('data to be add------------', formData);
    this.http.put('http://localhost:3000/api/deleteBook', formData)
      .subscribe((data) => {
        console.log('data deleted successfully', data);
        this.snackbar.open("Book Deleted successfully",'',{duration : 4000,panelClass: 'notif-success'})

        this.displayBooks()

      },(err) =>{
        this.snackbar.open("Oops something broke !!",'',{duration : 4000,panelClass: 'notif-success'})

      })

  }
  assignedBook() {
    var formData: any = new FormData();

    formData = {
      bookId: this.addBookId,
      userName: this.userName
    }
    console.log('data to be add------------', formData);
    this.http.post('http://localhost:3000/api/assignBookToUser', formData)
      .subscribe((data) => {
        console.log('Book assign successfully', data);
        this.snackbar.open("Book assigned successfully",'',{duration : 4000,panelClass: 'notif-success'})

        this.displayBooks()

      },(err) =>{
        this.snackbar.open("Oops something broke !! Book Id should not be null",'',{duration : 4000,panelClass: 'notif-success'})

      })
  }
}