import { Component, Input, OnInit } from '@angular/core';
import { faPlus, faMinus, faBars, faGripVertical, faTrash, faClone, faArrowUpFromBracket, faPhone } from '@fortawesome/free-solid-svg-icons'
import "@ptkdev/webcomponent-instagram-widget";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input('classealyocolori') cac: any = null;

  numero_telefonico: any = {valore: ""}

  alyoiput: any;

  lista_prefissi = [ 
  { id: 0, prefisso: '+39', nazione: 'Italia' },
  { id: 1, prefisso: '+93', nazione: 'Afghanistan' },
  { id: 2, prefisso: '+1', nazione: 'Alaska' },
  { id: 3, prefisso: '+355', nazione: 'Albania' },
  { id: 4, prefisso: '+213', nazione: 'Algeria' },
  { id: 5, prefisso: '+376', nazione: 'Andorra' },
  { id: 6, prefisso: '+244', nazione: 'Angola' },
  { id: 7, prefisso: '+1264', nazione: 'Anguilla' },
  { id: 8, prefisso: '+1268', nazione: 'Antigua e Barbuda' },
  { id: 9, prefisso: '+599', nazione: 'Antille Olandesi' },
  { id: 10, prefisso: '+966', nazione: 'Arabia Saudita' },
  { id: 11, prefisso: '+54', nazione: 'Argentina' },
  { id: 12, prefisso: '+374', nazione: 'Armenia' },
  { id: 13, prefisso: '+297', nazione: 'Aruba' },
  { id: 14, prefisso: '+247', nazione: 'Ascension' },
  { id: 15, prefisso: '+61', nazione: 'Australia' },
  { id: 16, prefisso: '+43', nazione: 'Austria' },
  { id: 17, prefisso: '+994', nazione: 'Azerbaigian' },
  { id: 18, prefisso: '+1242', nazione: 'Bahamas' },
  { id: 19, prefisso: '+973', nazione: 'Bahrein' },
  { id: 20, prefisso: '+880', nazione: 'Bangladesh' },
  { id: 21, prefisso: '+1246', nazione: 'Barbados' },
  { id: 22, prefisso: '+32', nazione: 'Belgio' },
  { id: 23, prefisso: '+501', nazione: 'Belize' },
  { id: 24, prefisso: '+229', nazione: 'Benin' },
  { id: 25, prefisso: '+1441', nazione: 'Bermuda' },
  { id: 26, prefisso: '+975', nazione: 'Bhutan' },
  { id: 27, prefisso: '+375', nazione: 'Bielorussia' },
  { id: 28, prefisso: '+591', nazione: 'Bolivia' },
  { id: 29, prefisso: '+387', nazione: 'Bosnia Erzegovina' },
  { id: 30, prefisso: '+267', nazione: 'Botswana' },
  { id: 31, prefisso: '+55', nazione: 'Brasile' },
  { id: 32, prefisso: '+673', nazione: 'Brunei' },
  { id: 33, prefisso: '+359', nazione: 'Bulgaria' },
  { id: 34, prefisso: '+226', nazione: 'Burkina Faso' },
  { id: 35, prefisso: '+257', nazione: 'Burundi' },
  { id: 36, prefisso: '+855', nazione: 'Cambogia' },
  { id: 37, prefisso: '+237', nazione: 'Camerun' },
  { id: 38, prefisso: '+1', nazione: 'Canada' },
  { id: 39, prefisso: '+238', nazione: 'Capo Verde' },
  { id: 40, prefisso: '+1345', nazione: 'Cayman' },
  { id: 41, prefisso: '+235', nazione: 'Ciad' },
  { id: 42, prefisso: '+56', nazione: 'Cile' },
  { id: 43, prefisso: '+86', nazione: 'Cina' },
  { id: 44, prefisso: '+357', nazione: 'Cipro' },
  { id: 45, prefisso: '+57', nazione: 'Colombia' },
  { id: 46, prefisso: '+2697', nazione: 'Comore' },
  { id: 47, prefisso: '+242', nazione: 'Congo' },
  { id: 48, prefisso: '+850', nazione: 'Corea del Nord' },
  { id: 49, prefisso: '+82', nazione: 'Corea del Sud' },
  { id: 50, prefisso: '+225', nazione: 'Costa d Avorio' },
  { id: 51, prefisso: '+506', nazione: 'Costarica' },
  { id: 52, prefisso: '+385', nazione: 'Croazia' },
  { id: 53, prefisso: '+53', nazione: 'Cuba' },
  { id: 54, prefisso: '+45', nazione: 'Danimarca' },
  { id: 55, prefisso: '+246', nazione: 'Diego Garcia' },
  { id: 56, prefisso: '+1767', nazione: 'Dominica' },
  { id: 57, prefisso: '+593', nazione: 'Ecuador' },
  { id: 58, prefisso: '+20', nazione: 'Egitto' },
  { id: 59, prefisso: '+503', nazione: 'El Salvador' },
  { id: 60, prefisso: '+971', nazione: 'Emirati Arabi Uniti' },
  { id: 61, prefisso: '+372', nazione: 'Emsat' },
  { id: 62, prefisso: '+88213', nazione: 'Emsat' },
  { id: 63, prefisso: '+8818', nazione: 'Emsat' },
  { id: 64, prefisso: '+291', nazione: 'Eritrea' },
  { id: 65, prefisso: '+372', nazione: 'Estonia' },
  { id: 66, prefisso: '+251', nazione: 'Etiopia' },
  { id: 67, prefisso: '+298', nazione: 'FaerOer' },
  { id: 68, prefisso: '+500', nazione: 'Falkland' },
  { id: 69, prefisso: '+63', nazione: 'Filippine' },
  { id: 70, prefisso: '+358', nazione: 'Finlandia' },
  { id: 71, prefisso: '+33', nazione: 'Francia' },
  { id: 72, prefisso: '+241', nazione: 'Gabon' },
  { id: 73, prefisso: '+220', nazione: 'Gambia' },
  { id: 74, prefisso: '+995', nazione: 'Georgia' },
  { id: 75, prefisso: '+49', nazione: 'Germania' },
  { id: 76, prefisso: '+233', nazione: 'Ghana' },
  { id: 77, prefisso: '+18099', nazione: 'Giamaica' },
  { id: 78, prefisso: '+81', nazione: 'Giappone' },
  { id: 79, prefisso: '+350', nazione: 'Gibilterra' },
  { id: 80, prefisso: '+253', nazione: 'Gibuti' },
  { id: 81, prefisso: '+962', nazione: 'Giordania' },
  { id: 82, prefisso: '+44', nazione: 'Gran Bretagna' },
  { id: 83, prefisso: '+30', nazione: 'Grecia' },
  { id: 84, prefisso: '+1876', nazione: 'Grenada' },
  { id: 85, prefisso: '+299', nazione: 'Groenlandia' },
  { id: 86, prefisso: '+590590', nazione: 'Guadalupa PSTN' },
  { id: 87, prefisso: '+590690', nazione: 'Guadalupa MOBILE' },
  { id: 88, prefisso: '+1671', nazione: 'Guam' },
  { id: 89, prefisso: '+502', nazione: 'Guatemala' },
  { id: 90, prefisso: '+594594', nazione: 'Guayana Francese PSTN' },
  { id: 91, prefisso: '+594694', nazione: 'Guayana Francese MOBILE' },
  { id: 92, prefisso: '+245', nazione: 'Guinea Bissau' },
  { id: 93, prefisso: '+240', nazione: 'Guinea Equatoriale' },
  { id: 94, prefisso: '+592', nazione: 'Guyana' },
  { id: 95, prefisso: '+509', nazione: 'Haiti' },
  { id: 96, prefisso: '+1', nazione: 'Hawaii' },
  { id: 97, prefisso: '+504', nazione: 'Honduras' },
  { id: 98, prefisso: '+852', nazione: 'Hong Kong' },
  { id: 99, prefisso: '+91', nazione: 'India' },
  { id: 100, prefisso: '+62', nazione: 'Indonesia' },
  { id: 101, prefisso: '+871', nazione: 'Inmarsat Atlantico Est' },
  { id: 102, prefisso: '+874', nazione: 'Inmarsat Atlantico Ovest' },
  { id: 103, prefisso: '+873', nazione: 'Inmarsat Indiano' },
  { id: 104, prefisso: '+872', nazione: 'Inmarsat Pacifico' },
  { id: 105, prefisso: '+98', nazione: 'Iran' },
  { id: 106, prefisso: '+964', nazione: 'Iraq' },
  { id: 107, prefisso: '+8816', nazione: 'Iridium' },
  { id: 108, prefisso: '+8817', nazione: 'Iridium' },
  { id: 109, prefisso: '+353', nazione: 'Irlanda' },
  { id: 110, prefisso: '+682', nazione: 'Is. Cook' },
  { id: 111, prefisso: '+679', nazione: 'Is. Figi' },
  { id: 112, prefisso: '+672', nazione: 'Is. Norfolk' },
  { id: 113, prefisso: '+354', nazione: 'Islanda' },
  { id: 114, prefisso: '+972', nazione: 'Israele' },
  { id: 115, prefisso: '+855', nazione: 'Kampuchea (Cambogia)' },
  { id: 116, prefisso: '+7', nazione: 'Kazakistan' },
  { id: 117, prefisso: '+254', nazione: 'Kenya' },
  { id: 118, prefisso: '+996', nazione: 'Kirghizistan' },
  { id: 119, prefisso: '+686', nazione: 'Kiribati' },
  { id: 120, prefisso: '+965', nazione: 'Kuwait' },
  { id: 121, prefisso: '+856', nazione: 'Laos' },
  { id: 122, prefisso: '+266', nazione: 'Lesotho' },
  { id: 123, prefisso: '+371', nazione: 'Lettonia' },
  { id: 124, prefisso: '+961', nazione: 'Libano' },
  { id: 125, prefisso: '+231', nazione: 'Liberia' },
  { id: 126, prefisso: '+218', nazione: 'Libia' },
  { id: 127, prefisso: '+423', nazione: 'Liechtenstein' },
  { id: 128, prefisso: '+370', nazione: 'Lituania' },
  { id: 129, prefisso: '+352', nazione: 'Lussemburgo' },
  { id: 130, prefisso: '+853', nazione: 'Macao' },
  { id: 131, prefisso: '+389', nazione: 'Macedonia' },
  { id: 132, prefisso: '+261', nazione: 'Madagascar' },
  { id: 133, prefisso: '+265', nazione: 'Malawi' },
  { id: 134, prefisso: '+60', nazione: 'Malaysia' },
  { id: 135, prefisso: '+960', nazione: 'Maldive' },
  { id: 136, prefisso: '+223', nazione: 'Malawi' },
  { id: 137, prefisso: '+356', nazione: 'Malta' },
  { id: 138, prefisso: '+1670', nazione: 'Marianne' },
  { id: 139, prefisso: '+212', nazione: 'Marocco' },
  { id: 140, prefisso: '+692', nazione: 'Marshall' },
  { id: 141, prefisso: '+596596', nazione: 'Martinica PSTN' },
  { id: 142, prefisso: '+596696', nazione: 'Martinica MOBILE' },
  { id: 143, prefisso: '+222', nazione: 'Mauritania' },
  { id: 144, prefisso: '+230', nazione: 'Mauritius' },
  { id: 145, prefisso: '+2696', nazione: 'Mayotte' },
  { id: 146, prefisso: '+52', nazione: 'Messico' },
  { id: 147, prefisso: '+691', nazione: 'Micronesia' },
  { id: 148, prefisso: '+373', nazione: 'Moldavia' },
  { id: 149, prefisso: '+377', nazione: 'Monaco Principato e Montecarlo' },
  { id: 150, prefisso: '+976', nazione: 'Mongolia' },
  { id: 151, prefisso: '+1664', nazione: 'Montserrat' },
  { id: 152, prefisso: '+258', nazione: 'Mozambico' },
  { id: 153, prefisso: '+95', nazione: 'Myanmar (Birmania)' },
  { id: 154, prefisso: '+264', nazione: 'Namibia' },
  { id: 155, prefisso: '+674', nazione: 'Nauru' },
  { id: 156, prefisso: '+977', nazione: 'Nepal' },
  { id: 157, prefisso: '+505', nazione: 'Nicaragua' },
  { id: 158, prefisso: '+227', nazione: 'Niger' },
  { id: 159, prefisso: '+234', nazione: 'Nigeria' },
  { id: 160, prefisso: '+683', nazione: 'Niue' },
  { id: 161, prefisso: '+47', nazione: 'Norvegia' },
  { id: 162, prefisso: '+687', nazione: 'Nuova Caledonia' },
  { id: 163, prefisso: '+64', nazione: 'Nuova Zelanda' },
  { id: 164, prefisso: '+968', nazione: 'Oman' },
  { id: 165, prefisso: '+31', nazione: 'Paesi Bassi' },
  { id: 166, prefisso: '+92', nazione: 'Pakistan' },
  { id: 167, prefisso: '+680', nazione: 'Palau' },
  { id: 168, prefisso: '+507', nazione: 'Panama' },
  { id: 169, prefisso: '+675', nazione: 'Papua Nuova Guinea' },
  { id: 170, prefisso: '+595', nazione: 'Paraguay' },
  { id: 171, prefisso: '+51', nazione: 'Perù' },
  { id: 172, prefisso: '+689', nazione: 'Polinesia Francese' },
  { id: 173, prefisso: '+48', nazione: 'Polonia' },
  { id: 174, prefisso: '+351', nazione: 'Portogallo' },
  { id: 175, prefisso: '+1787', nazione: 'Portorico' },
  { id: 176, prefisso: '+974', nazione: 'Qatar' },
  { id: 177, prefisso: '+44', nazione: 'Regno Unito' },
  { id: 178, prefisso: '+420', nazione: 'Repubblica Ceca' },
  { id: 179, prefisso: '+236', nazione: 'Repubblica Centrafricana' },
  { id: 180, prefisso: '+1809', nazione: 'Repubblica Dominicana' },
  { id: 181, prefisso: '+224', nazione: 'Repubblica Guinea' },
  { id: 182, prefisso: '+378', nazione: 'Repubblica di San Marino' },
  { id: 183, prefisso: '+421', nazione: 'Repubblica Slovacca' },
  { id: 184, prefisso: '+262262', nazione: 'Reunione PSTN' },
  { id: 185, prefisso: '+262692', nazione: 'Reunione MOBILE' },
  { id: 186, prefisso: '+40', nazione: 'Romania' },
  { id: 187, prefisso: '+250', nazione: 'Ruanda' },
  { id: 188, prefisso: '+7', nazione: 'Russia' },
  { id: 189, prefisso: '+290', nazione: 'Saint Elena' },
  { id: 190, prefisso: '+1869', nazione: 'Saint Kittis e Nevis' },
  { id: 191, prefisso: '+1758', nazione: 'Saint Lucia' },
  { id: 192, prefisso: '+508', nazione: 'Saint Pierre e Miquelon' },
  { id: 193, prefisso: '+1784', nazione: 'Saint Vincent e Grenadines' },
  { id: 194, prefisso: '+677', nazione: 'Salomone' },
  { id: 195, prefisso: '+685', nazione: 'Samoa' },
  { id: 196, prefisso: '+684', nazione: 'Samoa Americane' },
  { id: 197, prefisso: '+239', nazione: 'Sao Tomè e Principe' },
  { id: 198, prefisso: '+221', nazione: 'Senegal' },
  { id: 199, prefisso: '+381', nazione: 'Serbia&Montenegro' },
  { id: 200, prefisso: '+248', nazione: 'Seychelles' },
  { id: 201, prefisso: '+232', nazione: 'Sierra Leone' },
  { id: 202, prefisso: '+65', nazione: 'Singapore' },
  { id: 203, prefisso: '+963', nazione: 'Siria' },
  { id: 204, prefisso: '+386', nazione: 'Slovenia' },
  { id: 205, prefisso: '+252', nazione: 'Somalia' },
  { id: 206, prefisso: '+34', nazione: 'Spagna' },
  { id: 207, prefisso: '+94', nazione: 'Sri Lanka' },
  { id: 208, prefisso: '+27', nazione: 'Sud Africa' },
  { id: 209, prefisso: '+249', nazione: 'Sudan' },
  { id: 210, prefisso: '+597', nazione: 'Suriname' },
  { id: 211, prefisso: '+46', nazione: 'Svezia' },
  { id: 212, prefisso: '+41', nazione: 'Svizzera' },
  { id: 213, prefisso: '+268', nazione: 'Swaziland' },
  { id: 214, prefisso: '+886', nazione: 'Taiwan' },
  { id: 215, prefisso: '+992', nazione: 'Tajikistan' },
  { id: 216, prefisso: '+255', nazione: 'Tanzania' },
  { id: 217, prefisso: '+66', nazione: 'Thailandia' },
  { id: 218, prefisso: '+228', nazione: 'Togo' },
  { id: 219, prefisso: '+690', nazione: 'Tokelau' },
  { id: 220, prefisso: '+676', nazione: 'Tonga' },
  { id: 221, prefisso: '+1868', nazione: 'Trinidad e Tobagosƒ' },
  { id: 222, prefisso: '+216', nazione: 'Tunisia' },
  { id: 223, prefisso: '+90', nazione: 'Turchia' },
  { id: 224, prefisso: '+993', nazione: 'Turkmenistan' },
  { id: 225, prefisso: '+1649', nazione: 'Turks e Caicos' },
  { id: 226, prefisso: '+688', nazione: 'Tuvalu' },
  { id: 227, prefisso: '+380', nazione: 'Ucraina' },
  { id: 228, prefisso: '+256', nazione: 'Uganda' },
  { id: 229, prefisso: '+36', nazione: 'Ungheria' },
  { id: 230, prefisso: '+598', nazione: 'Uruguay' },
  { id: 231, prefisso: '+1', nazione: 'USA (**)' },
  { id: 232, prefisso: '+998', nazione: 'Uzbekistan' },
  { id: 233, prefisso: '+678', nazione: 'Vanuatu' },
  { id: 234, prefisso: '+58', nazione: 'Venezuela' },
  { id: 235, prefisso: '+1340', nazione: 'Vergini Is. Americane' },
  { id: 236, prefisso: '+1284', nazione: 'Vergini Is. Britanniche' },
  { id: 237, prefisso: '+84', nazione: 'Vietnam' },
  { id: 238, prefisso: '+681', nazione: 'Wallis e Futuna' },
  { id: 239, prefisso: '+967', nazione: 'Yemen' },
  { id: 240, prefisso: '+243', nazione: 'Zaire' },
  { id: 241, prefisso: '+260', nazione: 'Zambia' },
  { id: 242, prefisso: '+263', nazione: 'Zimbawe' }
  ]

  prefisso: any = {valore: 0}

  grafica: any = {
    classe: {
     generico: {
       contenitore: "alyo-larghezza-100",
       input: "alyo-larghezza-100 alyo-padding-10px alyo-bordo-rotondo-10px alyo-bordo-0px",
       bottone_cancella: "alyo-testo-grigio30",
       bottone_no_visibile: "alyo-testo-grigio30",
       bottone_visibile: "alyo-blu",
       fonts: {
         contenitore: "alyo-posizione-assoluto", 
         contenitore_lista: "alyo-sfocato-bianco-50",
         bottoni: ""
       }
     },
 
    },
    stile: {
     generico: {
       contenitore: "",
       input: "",
       bottone_cancella: "",
       bottone_no_visibile: "",
       bottone_visibile: ""
     },
 
    }
   
  }

  fawesome: any = {piu: faPlus, meno: faMinus, lista: faBars, griglia: faGripVertical,cestino: faTrash, copia: faClone, condividi: faArrowUpFromBracket, telefono: faPhone}

  lista_sezioni = [
    {indice: 0, icona: faGripVertical, label: 'Griglia', valore: 'col-6 col-sm-6 col-md-3 ', selezione: true, stile:  {'right':'0px'} },
    {indice: 1, icona: faBars,         label: 'Lista',   valore: '', selezione: false, stile: {'left':'0px'} },
  ]

  constructor(private cookie: CookieService) {

  }

  ngOnInit(): void {
    // var now = new Date()
    // var exp = new Date(now.getFullYear()+2, now.getMonth(), now.getDate());
    // this.cookie.set("intestazione,testo","")
    // this.cookie.get("valore")
    // this.cookie.delete("valore")

    // window.confirm("VUOI CANCELLARE L'ORDINE NUMERO "+" ?, \n TUTTI I SUOI PIATTI VERRANNO CANCELLATI") {this.s('','')}

  }

  keyup(){
    this.s("TESTO: ",this.numero_telefonico.valore)
    this.controllo_numero();
  }

  async condividi(){

    try {
      await navigator.share({ title: "Condividi l'url di whastapp", url: 'https://wa.me/'+this.lista_prefissi[this.prefisso.valore].prefisso.replace('+', '')+this.numero_telefonico.valore});
      console.log("dato funzionate");
    } catch (err) {
      console.error("Share fallitto:");
    }
  }


  // costruzione_array(){

  //   this.s("lista_prefissi: ",this.lista_prefissi.length)

  //   this.s("","{ ");  
  //   for(var i=0; i<this.lista_prefissi.length; i++){
  //      console.log("","{ id: "+i+", prefisso: '"+this.lista_prefissi[i]+"', nazione: '"+this.lista_paesi[i]+"' },");   
  //   }
  //   this.s(""," }");

  // }

  controllo_numero(){
     
    if(this.numero_telefonico.valore.startsWith("+")){

      //this.numero_telefonico.valore = this.numero_telefonico.valore.replace(' ', '');

      var array = this.numero_telefonico.valore.split(" ")
      
      for(var i=6; i>0; i--){
          let prefisso = this.lista_prefissi.find((numero) => {
              return numero.prefisso === array[0].substring(0,array[0].length)
          });
          if(prefisso != undefined){
            this.prefisso.valore = prefisso?.prefisso; 
            this.numero_telefonico.valore = this.numero_telefonico.valore.replace(this.prefisso.valore, ''); 
            break;
          }  
      }

      this.numero_telefonico.valore = this.numero_telefonico.valore.replace(' ', '');
      this.numero_telefonico.valore = this.numero_telefonico.valore.replace(' ', '');
      this.numero_telefonico.valore = this.numero_telefonico.valore.replace('+', '');

    }


    // if(this.numero_telefonico.valore.length>10){
    //   for(var i=6; i>0; i--){
    //       let prefisso = this.lista_prefissi.find((numero) => {
    //           return numero.prefisso.replace('+', '') === this.numero_telefonico.valore.substring(0,i)
    //       });
    //       if(prefisso != undefined){this.prefisso.valore = prefisso?.prefisso;}  
    //   }
    // }
  }

  alyoCopy(text: any){

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

 
}
