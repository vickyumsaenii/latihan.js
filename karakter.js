/**  Klasifikasi masing-masing level karakter game terdiri sebagai berikut
* power lebih besar dari 100 : "Expert"
* power di atas 70 - 100 : "Pro"
* power diatas 50 -70 : "Normal"
* power diatas 30 -50 : "Basic"
* power di bawah 30 : "Baginer"
*//

// pseudocode

/**
 * STORE Power WITH ANY NUMBER
 * 
 */

if (Power > 100) {
  console.log ("karakter = Expert")
} else if (Power > 70 && Power <= 100) ; {
  console.log ("karakter = Pro");
} else if (Power > 50 && Power <= 70); {
  console.log ("karakter = Normal") ; 
} else if (Power > 30 && Power <= 50); {
   console.log ("karakter = Basic"):
} else if (Power > 30); {
  console.log ("karakter = Beginner") ;
}
