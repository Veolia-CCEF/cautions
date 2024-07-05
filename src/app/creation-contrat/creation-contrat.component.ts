
import { ChangeDetectorRef, ElementRef, Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IgxStepperComponent } from 'igniteui-angular';
import societesListe from './json/societes.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creation-contrat',
  templateUrl: './creation-contrat.component.html',
  styleUrls: ['./creation-contrat.component.scss']
})

export class CreationContratComponent {
    @ViewChild('stepper', { static: true })
    public stepper: IgxStepperComponent;

    public today: Date = new Date();
    public territoriesToDisplay: string [] =  []

    public territories: { region: string; territory: string }[] = [
      {region : "62 - Est", territory : "Alsace"}, {region : "62 - Est", territory : "Ardennes"}, {region : "62 - Est", territory : "Aube"}, {region : "62 - Est", territory : "Haute Marne"}, {region : "62 - Est", territory : "Lorraine Sud"}, {region : "62 - Est", territory : "Marne"}, {region : "62 - Est", territory : "Metz Thionville"}, {region : "62 - Est", territory : "Moselle Est"}, {region : "62 - Est", territory : "Verdun"}, {region : "62 - Est", territory : "Pays Haut"},  {region : "62 - Est", territory : "Franche Comté"},
      {region : "63 - Centre Est", territory : "Bourgogne Centre"}, {region : "63 - Centre Est", territory : "Drome Ardéche"}, {region : "63 - Centre Est", territory : "EGL"}, {region : "63 - Centre Est", territory : "Haute Savoie Jura Ain"}, {region : "63 - Centre Est", territory : "Loire Auvergne"}, {region : "63 - Centre Est", territory : "Portes de Lyon"}, {region : "63 - Centre Est", territory : "Saone et Loire"}, {region : "63 - Centre Est", territory : "Savoie"}, {region : "63 - Centre Est", territory : "Isére"}, {region : "63 - Centre Est", territory : "Val de Saone"}, {region : "63 - Centre Est", territory : "Rhone"}, {region : "63 - Centre Est", territory : "Bourgogne Nord"},
      {region : "64 - Sud Ouest", territory : "Atlantique"}, {region : "64 - Sud Ouest", territory : "Dordogne"}, {region : "64 - Sud Ouest", territory : "Limousin"}, {region : "64 - Sud Ouest", territory : "Garonne et affluents"}, {region : "64 - Sud Ouest", territory : "Pyrénées Garonne"}, {region : "64 - Sud Ouest", territory : "Toulouse Métropole"}, {region : "64 - Sud Ouest", territory : "SME Weill"},
      {region : "65 - Centre Ouest", territory : "Anjou & Deux Sèvres"}, {region : "65 - Centre Ouest", territory : "Armor Emeraude"}, {region : "65 - Centre Ouest", territory : "Beauce Sologne Berry"}, {region : "65 - Centre Ouest", territory : "Bretagne Ouest"}, {region : "65 - Centre Ouest", territory : "Ille et Vilaine Sud"}, {region : "65 - Centre Ouest", territory : "Loire Atlantique"}, {region : "65 - Centre Ouest", territory : "Sarthe & Mayenne"}, {region : "65 - Centre Ouest", territory : "Val de Loire Sologne"}, {region : "65 - Centre Ouest", territory : "Vendée"}, {region : "65 - Centre Ouest", territory : "Roger Marteau"}, {region : "65 - Centre Ouest", territory : "SEEG"},
      {region : "66 - Hauts de France", territory : "Aisne"}, {region : "66 - Hauts de France", territory : "Artois Douaisis"}, {region : "66 - Hauts de France", territory : "Artois Hainaut"}, {region : "66 - Hauts de France", territory : "Bruay Béthune"}, {region : "66 - Hauts de France", territory : "Lille Métropole"}, {region : "66 - Hauts de France", territory : "Littoral Audomarois"}, {region : "66 - Hauts de France", territory : "Oise"}, {region : "66 - Hauts de France", territory : "Somme"},
      {region : "67 - Ile de France", territory : "Cergy Vexin"}, {region : "67 - Ile de France", territory : "Marne et Oise"}, {region : "67 - Ile de France", territory : "Paris Métropole"}, {region : "67 - Ile de France", territory : "Essonne"}, {region : "67 - Ile de France", territory : "Seine et Marne"}, {region : "67 - Ile de France", territory : "Yvelines"},
      {region : "68 - Normandie", territory : "Bray et Caux"}, {region : "68 - Normandie", territory : "Calvados"}, {region : "68 - Normandie", territory : "Dieppe"}, {region : "68 - Normandie", territory : "Eure"}, {region : "68 - Normandie", territory : "Manche et Orne"}, {region : "68 - Normandie", territory : "Vallée de Seine"},
      {region : "69 - Méditerranée", territory : "Alpes du Sud"}, {region : "69 - Méditerranée", territory : "Alpes Maritimes"}, {region : "69 - Méditerranée", territory : "Bouches du Rhone"}, {region : "69 - Méditerranée", territory : "Corse"}, {region : "69 - Méditerranée", territory : "Esterel"}, {region : "69 - Méditerranée", territory : "Golfe de Saint Tropez"}, {region : "69 - Méditerranée", territory : "Provence Méditerranée"}, {region: "69 - Méditerranée", territory : "Centre Var"}, {region : "69 - Méditerranée", territory : "Vaucluse"},
      {region : "70 - Sud", territory : "Aude"}, {region : "70 - Sud", territory : "Pyrénées Orientales"}, {region :"70 - Sud", territory : "Gard Lozére"}, {region :"70 - Sud", territory : "Hérault"}, {region :"70 - Sud", territory : "Aveyron"}, {region : "70 - Sud", territory : "Epur Travaux"},
      {region : "79 - Réunion", territory : "La Réunion"}];


constructor(public cdr: ChangeDetectorRef, public element: ElementRef, public http: HttpClient) {
}

    public cards: any[] = [
        {
            img: 'https://www.infragistics.com/angular-demos-lob/assets/images/stepper/card-gold.png',
            price: "Cautions",
            offer: 'Formulaire',
            type: 'Travaux',
            description: 'Travaux'
        },
        {
            img: 'https://www.infragistics.com/angular-demos-lob/assets/images/stepper/card-red.png',
            price: "Cautions",
            offer: 'Formulaire',
            type: 'Affermage',
            description: 'Affermage / Prestation de service'
        }
    ];

    public regions: string [] = [
      "48 - Nova Veolia", "62 - Est", "63 - Centre Est", "64 - Sud Ouest", "65 - Centre Ouest", "66 - Hauts de France", "67 - Ile de France", "68 - Normandie", "69 - Méditerranée", "70 - Sud", "79 - Réunion"
    ]

    public natureGarantie: {nom: string; type: string}[] = [
        {nom: "Retenue de garantie marché public", type: "Travaux"},
        {nom: "Retenue de garantie avance marché public", type: "Travaux"},
        {nom: "Retenue de garantie marché privé", type: "Travaux"},
        {nom: "Retenue de garantie avance marché privé", type: "Travaux"},
        {nom: "Contre garantie", type: "Travaux"},
        {nom: "Caution personnelle et solidaire", type: "Travaux"},
        {nom: "Garantie de paiement sous-traitant", type: "Travaux"},
        {nom: "Garantie à première demande", type: "Affermage"},
        {nom: "Caution personnelle et solidaire", type: "Affermage"}
    ];

    public singleBranchExpand = false;
    public selectedCard: any;
    public allFilesLoaded: boolean;

    public generalInfos: any = {
        region: '',
        donneurOrdre: '',
        codeContrat: '',
        codeChantier: '',
        objetContrat: '',
        objetTravaux: '',
        dateSaisie: '',
        dateLimite: '',
        typeMontantGarantie: '',
        montantTTC: 0,
        montantGarantie: 0,
        methode: '',
        base: 0,
        taux: 0,
    };

    public beneficiaireInfos: any = {
        nom: '',
        adresse: '',
        ville: '',
        cp: '',
        formeJuridique: '',
        numeroImmatriculation: '',
        lieuImmatriculation: ''
    };

    public garantieInfos: any = {
        garantie: '',
        type: 'Travaux',
        relatif: '',
        isAvenant: '',
        numeroCaution: '',
    }

    public selectedType: string = 'Travaux';
    selectedFiles: { [key: string]: File } = {};

    onFileChange(event: any, fieldName: string) {
      if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.selectedFiles[fieldName] = file;
      }
      this.allFilesLoaded = this.checkAllFilesLoaded()
    }

    checkAllFilesLoaded() {
      console.log(this.selectedFiles)
      if (this.garantieInfos.type == "Travaux" && this.selectedFiles['notificationMarche'] && this.selectedFiles['acteEngagement'] && this.selectedFiles['cahierClause']) {
        if ((this.garantieInfos.garantie == "Garantie de paiement sous-traitant" || this.garantieInfos.garantie == "Contre garantie") && this.selectedFiles['conventionGroupement']) {
          return true;
        } else if (this.garantieInfos.garantie !== "Garantie de paiement sous-traitant" && this.garantieInfos.garantie !== "Contre garantie") {
          return true;
        }
      } else if (this.garantieInfos.type == "Affermage" && this.selectedFiles['pageDeGarde'] && this.selectedFiles['pageObjet'] && this.selectedFiles['pageDateContrat'] && this.selectedFiles['pageArticle']) {
        return true;
      }
      return false;
    }

    objectToString(obj: any): string {
      let result = '';
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result += `${key}: ${obj[key]}<br>`;
        }
      }
      return result;
    }

    sendEmail() {
      const formData = new FormData();
      const generalInfosString = this.objectToString(this.generalInfos);
      const beneficiaireInfosString = this.objectToString(this.beneficiaireInfos);
      const garantieInfosString = this.objectToString(this.garantieInfos);
      const result = `${generalInfosString}<br>${beneficiaireInfosString}<br>${garantieInfosString}`;

      formData.append('from', 'renaud.gilliers@veolia.com');
      formData.append('to', 'renaud.gilliers@veolia.com');
      formData.append('subject', 'Test d\'envoi d\'e-mail pour Zendesk');
      formData.append('html', '<p>' + result + '</p>');

      formData.forEach((value: any, key: any) => {
        console.log(`${key}: ${value}`);
      });
  
      for (const fieldName in this.selectedFiles) {
        if (this.selectedFiles.hasOwnProperty(fieldName)) {
          formData.append(fieldName, this.selectedFiles[fieldName]);
        }
      }

      const url = 'http://localhost:3000/mail';
      this.http.post(url, formData).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    getFilteredNatures() {
        return this.natureGarantie.filter(nature => nature.type === this.selectedType);
      }

    getFilteredSte() {
        if (this.generalInfos.region) {
          return societesListe.filter(ste => ste.numreg == this.generalInfos.region.substring(0, 2));
        } else {
          return societesListe
        }
      }

    changeMontantGarantieFixe(newValue: number) {
      this.generalInfos.montantGarantie = (newValue * 0.05).toFixed(2)
      console.log(this.generalInfos.montantGarantie)
    }

    changeMontantGarantie() {
      this.generalInfos.montantGarantie = (this.generalInfos.base / 100) * this.generalInfos.taux;
    }

    getKeys(obj: any): Array<string> {
        return Object.keys(obj);
      }

    public selectCard(card: any): void {
        this.selectedCard = card;
        this.selectedType = card.type;
        this.garantieInfos.type = card.type;
        this.cdr.detectChanges();
        this.stepper.next();
    }

    public resetStepper(form1: NgForm, form2: NgForm, form3: NgForm, form4: NgForm): void {
        this.stepper.steps[0].active = true;
        this.stepper.reset();
        this.selectedCard = null;
        this.allFilesLoaded = false;
        this.selectedFiles = {};
        form1.reset();
        form2.reset();
        form3.reset();
        form4.reset();
    }

    public handleKeyDown(evt: KeyboardEvent, card: any): void {
        if (evt.key.toLowerCase() === ' ' || evt.key.toLowerCase() === 'spacebar' || evt.key.toLowerCase() === 'space') {
            this.selectCard(card);
        }
    }

    onRegionChange(region: string): void {
      console.log(region)
      this.territoriesToDisplay = [];
      for (let i = 0; i < this.territories.length; i++) {
        if (region == this.territories[i].region) {
          this.territoriesToDisplay.push(this.territories[i].territory)
        }
      }
    }
}