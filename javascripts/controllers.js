function AppCtrl($scope){
  $scope.test = "Hello from AppCtrl!";
  $scope.projects = [
    {
      thumbnail: "img/atoms_mot.small.jpg",
      alt: "Magneto-optical trap containing atomic storage medium",
      page: "portfolio-single.html",
      title: "Quantum Memory for Squeezed Light",
      description: "Developing the building blocks for the computers of tomorrow.  Storing information onto atoms using light"
    },
    {
      thumbnail: "img/flowers-lg.jpg",
      alt: "Transcription of phone call audio",
      page: "portfolio-single.html",
      title: "\"Roger\" Speech Transcription",
      description: "An application to improve the quality of life of the hearing-impaired, by providing easier communications mechanism."
    },
    {
      thumbnail: "img/leaves-lg.jpg",
      alt: "BillFloat.com web site",
      page: "portfolio-single.html",
      title: "Ruby on Rails",
      description: "Front and backend web development for Billfloat.com, using Ruby on Rails"
    }
  ];
}
