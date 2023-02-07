import { Component } from '@angular/core';
import * as $ from 'jquery';
import { faHome, faGear } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  classe: any;

  lista_nome_profilo = ["ⒶⓁⓎⓄ ⓌⒽⒶⓉⓈⒶⓅⓅ","ＡＬＹＯ ＷＨＡＴＳＡＰＰ","ΔLΨΘ ШHΔƬЅΔƤƤ","𝔸𝕃𝕐𝕆 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ","🅐🅛🅨🅞 🅦🅗🅐🅣🅢🅐🅟🅟","🄰🄻🅈🄾 🅆🄷🄰🅃🅂🄰🄿🄿","ꍏ꒒ꌩꂦ ꅏꃅꍏ꓄ꌗꍏꉣꉣ","🍣 🅐🅛🅨🅞 🅢🅤🅢🅗🅘","ⱭlƳƠ ⱲӇⱭƬՏⱭƤƤ","🇦​🇱​🇾​🇴​ 🇼​🇭​🇦​🇹​🇸​🇦​🇵​🇵​"]

  classealyoscrittescorrevoli: any;
  caf = this;
  cac: any;
  nomeprofilo = "ALYO WHATSAPP"

  lista_sezioni = [
    {indice: 0, icona: faHome, label: 'Home',        selezione: true },
    {indice: 1, icona: faGear, label: 'Impostazioni', selezione: false },
  ]

  colori: any = {
    fisso: {
        sfondocontenitore: {
            true:  ["alyo-sfocato-bianco-50","alyo-sfocato-bianco-30","alyo-bianco-trasparente-30","alyo-bianco-trasparente-50"],
            false: ["alyo-sfocato-5F5F5F-50","alyo-sfocato-5F5F5F-30","alyo-nero-trasparente-30","alyo-nero-trasparente-50"]
          },
        sfondobody: {
            true:  ['./../assets/sfondo/sfondo.gif'],
            false: ['./../assets/sfondo/sfondofluo.gif']
          },
        testo: {
            true:  ["alyo-testo-nero"],
            false: ["alyo-testo-bianco"]
          }
        },
    variabile:{
        testo: {
            true:  ["alyo-testo-rosso","alyo-testo-verde","alyo-testo-blu","alyo-testo-rosavivo","alyo-testo-giallo","alyo-testo-viola","alyo-testo-marrone","alyo-testo-arancione","alyo-testo-turchese","alyo-testo-orchidea"],
            false: ["alyo-testo-giallofluo","alyo-testo-rosafluo","alyo-testo-arancionefluo","alyo-testo-verdefluo","alyo-testo-azzurrofluo",]
          },
        sfondocontenitore: {
            true:  ["alyo-rosso","alyo-verde","alyo-blu","alyo-rosavivo","alyo-giallo","alyo-viola","alyo-marrone","alyo-arancione","alyo-turchese","alyo-orchidea"],
            false: ["alyo-giallofluo","alyo-rosafluo","alyo-arancionefluo","alyo-verdefluo","alyo-azzurrofluo",]
          },
        icone: {
          true: ["../assets/icone/icona1.png","../assets/icone/icona2.png","../assets/icone/icona3.png","../assets/icone/icona4.png","../assets/icone/icona5.png","../assets/icone/icona6.png","../assets/icone/icona7.png","../assets/icone/icona8.png","../assets/icone/icona9.png","../assets/icone/icona10.png"],
          false: ["../assets/icone/iconafluo1.png","../assets/icone/iconafluo2.png","../assets/icone/iconafluo3.png","../assets/icone/iconafluo4.png","../assets/icone/iconafluo5.png"]
        }
        }
    }


  ngOnInit(): void {
    setTimeout(() => {
      $('body').css('background-image', 'url(' + this.cac.colorefisso("sfondobody",0) + ')');
    },200);
  }

  aggiornaLayout(){
    $('body').css('background-image', 'url(' + this.cac.colorefisso("sfondobody",0) + ')');
  }

  aggiornaBottoni(indice: number){
    for(var i=0; i<this.lista_sezioni.length; i++)
       { this.lista_sezioni[i].selezione = false; }
    this.lista_sezioni[indice].selezione= true;
  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
