import { LightningElement,wire,track  } from "lwc";
import getAcc from '@salesforce/apex/accController.getAcc';
import { NavigationMixin } from 'lightning/navigation';
export default class demoLWC extends(LightningElement)
{
  accounts;
  isloading;
  renderTable = false;
  connectedCallback()
  {
    this.isLoading = true;
      getAcc({}).then(result => 
        {
            this.accounts = result;
            this.renderTable = true;
        });
  }
  redirectToSobject() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: this.recordId,
            objectApiName: 'Account',
            actionName: 'view'
        },
    });
}
}
