class Ksiazka {
    constructor(tytul, autor, rokWydania) {
        this.tytul = tytul;
        this.autor = autor;
        this.rokWydania = rokWydania;
    }

    informacje() {
        return `${this.tytul} - ${this.autor} (${this.rokWydania})`;
    }
}

class Student {
    constructor(imie, nazwisko, numerAlbumu, oceny) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.numerAlbumu = numerAlbumu;
        this.oceny = oceny;
    }

    sredniaOcen() {
        const sum = this.oceny.reduce((acc, curr) => acc + curr, 0);
        return sum / this.oceny.length;
    }
}

class Trojkat {
    constructor(wysokosc, dlugoscPodstawy, nazwa) {
        this.wysokosc = wysokosc;
        this.dlugoscPodstawy = dlugoscPodstawy;
        this.nazwa = nazwa;
    }

    pole() {
        return 0.5 * this.wysokosc * this.dlugoscPodstawy;
    }

    static wiekszePole(trojkat1, trojkat2) {
        if (trojkat1.pole() > trojkat2.pole()) {
            return trojkat1;
        } else if (trojkat2.pole() > trojkat1.pole()) {
            return trojkat2;
        } else {
            return null;
        }
    }
}

class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
        this.wysokosc = wysokosc;
        this.podstawa1 = podstawa1;
        this.podstawa2 = podstawa2;
        this.nazwa = nazwa;
    }

    pole() {
        return 0.5 * (this.podstawa1 + this.podstawa2) * this.wysokosc;
    }

    zmienNazwe(nowaNazwa) {
        this.nazwa = nowaNazwa;
    }
}

// Tworzenie obiektów
const ksiazka1 = new Ksiazka("Władca Pierścieni", "J.R.R. Tolkien", 1954);
const student1 = new Student("Jan", "Kowalski", "123456", [4, 5, 3]);
const trojkat1 = new Trojkat(5, 4, "ABC");
const trojkat2 = new Trojkat(6, 5, "DEF");
const trojkat3 = new Trojkat(7, 6, "GHI");
const trapez1 = new Trapez(4, 3, 5, "Trapez1");
const trapez2 = new Trapez(5, 4, 6, "Trapez2");
const trapez3 = new Trapez(6, 5, 7, "Trapez3");

// Wyświetlanie informacji
document.getElementById("bookInfo").innerText = ksiazka1.informacje();
document.getElementById("studentInfo").innerText = `Średnia ocen studenta: ${student1.sredniaOcen()}`;
document.getElementById("triangleInfo").innerText = `Pole trójkąta: ${trojkat1.pole()}`;
document.getElementById("trapezInfo").innerText = `Pole trapezu: ${trapez1.pole()}`;
