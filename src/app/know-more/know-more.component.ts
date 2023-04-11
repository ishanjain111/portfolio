import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  downloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','assets/9919103130 IshanJain.pdf')
    link.setAttribute('download','resume.pdf');
    link.click();
    link.remove();
  }

  academics = [
    {year: "2019 - 2023", degree:"B.tech in Computer Science and Engineering",institute:"Jaypee institute Of Information Technology", score:"CGPA: 7.7"},
    {year: "2016 - 2018", degree:"AISSCE", institute:"Meerut Public School, Meerut", score:"Percentage: 95.2%"},
    {year: "2014 - 2016", degree:"AISSE",institute:"Meerut Public School, Meerut", score:"CGPA: 10"}
  ]

  projects = [
    {title: "Analysis Of Chest X-Ray", description:"Built a CNN-based model to predict wether the patient is suffering from either COVID or Pneumonia. In Input layers we have used relu and in output layer softmax as an activation function. Categorical crossentropy is used as a loss function."},
    {title:"Movie Recommendation",description:"A content-based movie Recommendation model made with python and C++ language which suggest movies according to your past behavior. The application uses cosine-similarity to find similiarities between different movies in the dataset with previous searches."},
    {title: "Weather Application", description:"This a weather application where user can know the real-time weather condition of the desired city along with that the latitude and longitude value of the city. This application is built using HTML, CSS, JS, ExpressJs and OpenWeather Api. Docker is used for containerization."}
  ]

  certificates = [
    {validity: "2021 - 2024", title:"Associate Cloud Engineer", provider:"Google Cloud", link:"View Certificate"},
    {validity: "2022 - 2024", title:"Cloud Practitioner", provider:"Amazon Web Services", link:"View Certificate"},
    {validity: "2021 - ", title:"Azure Fundamental AZ-900", provider:"Microsoft", link:"View Certificate"}
  ]

  responsibility = [
    {title: "Head of Students Welfare Society", description:"Head of the Students Welfare society which is an adminstrative hub of the college for the academic year 2021-2022. Successfully organized many events."},
    {title: "Management Lead at GDSC JIIT-128", description:"Management Lead of GDSC JIIT-128 chapter for the academic year 2021-2022. Successfully organized a online hackathon with a pool prize of 10 lakhs."},
    {title: "Google Cloud Facilitator", description:"Built a CNN"}
  ]

}
