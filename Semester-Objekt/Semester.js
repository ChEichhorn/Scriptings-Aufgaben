// ========================================
// = Aufgabe: Semesterbelegung als Objekt =
// ========================================
window.Student = function(name,studiensemester) {
  this.name = "Christoph Eichhorn"; // Schritt 1 von Aufgabe 1, vervollständige alle Funktionen
  this.studiensemester = 3;
  this.matrikelnummer = 901252;
  this.studiengang = "Interface Design";
  this.studienabschluss = "Master of Arts";
};

window.Student = function(name,studiensemester) {
  this.name = "Simon Koch"; // Schritt 1 von Aufgabe 1, vervollständige alle Funktionen
  this.studiensemester = 3;
  this.matrikelnummer = 902345;
  this.studiengang = "Medical Design";
  this.studienabschluss = "Master of Arts";
};

window.Student = function(name,studiensemester) {
  this.name = "Jona Rammler"; // Schritt 1 von Aufgabe 1, vervollständige alle Funktionen
  this.studiensemester = 3;
  this.matrikelnummer = 903452;
  this.studiengang = "Medical Design";
  this.studienabschluss = "Master of Arts";
};



window.Veranstaltung = function(titel,sws,credits) {
  this.titel = "Scriptings";
  this.sws = 2;
  this.credits = 3;
  this.workload = sws*45;
  this.zeit = "14:00-15:30";
  this.tag = "Mitwoch";

  this.onchange = function(veranstaltung){};

  
  // this.set = ...
  
  // Bonus-Aufgabe: Kannst du die _zeit_ ebenfalls "automatisch" berechnen?
  //                Was brauchst du dafür?
  
}


var mein_semester = {
  student: {
    name: "Christoph Christian Eichhorn",
    studiensemester: 3,
	matrikelnummer: 901252,
	studiengang: "Interface Design",
	studienabschluss: "Master of Arts"
  },
  welches: "WS",
  jahr: "2012/13",
  veranstaltungen: [ 
    {
      titel: "Scriptings",
      sws: 2,
      credits: 3,
      workload: 90,
      zeit: "14:00-15:30",
      tag: "Mittwoch"
    },
    {
      titel: "poetische Apparate",
      sws: 2,
      credits: 3,
      workload: 90,
      zeit: "08:15-09:45",
      tag: "Freitag"
    },
	{
      titel: "Gebe-Wesen",
      sws: 2,
      credits: 15,
      workload: 450,
      zeit: "10:00-13:00",
      tag: "Freitag"
    },
	{
      titel: "Rhino 3D",
      sws: 2,
      credits: 2,
      workload: 90,
      zeit: "09:00-11:00",
      tag: "Donnerstag"
    },
	{
      titel: "Read and Write for Design",
      sws: 2,
      credits: 3,
      workload: 90,
      zeit: "14:00-16:00",
      tag: "Dienstag"
    },
	{
      titel: "Pre-Thesis Colloquium",
      sws: 2,
      credits: 3,
      workload: 90,
      zeit: "16:00-18:00",
      tag: "Dienstg"
    }
  ]
};