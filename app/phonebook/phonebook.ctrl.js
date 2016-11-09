angular.module('phonebook').controller('Phonebookctrl', function($scope, $rootScope, $filter) {


    $scope.names = ["Ilija", "Alma", "Mirha", "Ali", "Vedran", "Jasmina", "Aldin", "Nedim", "Dejan"];

    $scope.sortedNames = $filter('orderBy')($scope.names);

    $scope.imenik = [{ ime: "Ali", datum: new Date(1986, 10, 18), grad: "Sarajevo", telefon: "123-456", mail: "ali@gmail.com", skype: "ali.skype" },
        { ime: "Ilija", datum: new Date(1990, 9, 5), grad: "Zenica", telefon: "123-777", mail: "Ilija@gmail.com", skype: "Ilija.skype" },
        { ime: "Vedran", datum: new Date(1989, 8, 4), grad: "Tuzla", telefon: "234-888", mail: "Vedran@gmail.com", skype: "Vedran.skype" },
        { ime: "Jasmina", datum: new Date(1988, 7, 3), grad: "Banja Luka", telefon: "321-989", mail: "Jasmina@gmail.com", skype: "Jasmina.skype" },
        { ime: "Mirha", datum: new Date(1991, 6, 2), grad: "Mostar", telefon: "222-333", mail: "Mirha@gmail.com", skype: "Mirha.skype" }
    ];

    $rootScope.korisnik = "korisnik";

    $scope.poredajpo = 'ime';

    var ascending = {
        ime: false,
        grad: false,
        telefon: false,
        mail: false,
        skype: false
    };


    $scope.open = function(y) {

        if (ascending.y === false) {
            $scope.poredajpo = y;
            ascending.y = true;

        } else {
            $scope.poredajpo = "-" + y;
            ascending.y = false;
        }
        console.log("klik na " + JSON.stringify(y) + " " + JSON.stringify(ascending.y) + " " + ascending.y);
    };



});
