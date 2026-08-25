class OpenNewAccountPage{
    constructor(page){
        this.page=page;
        this.OpenNewAccountLink=page.getByRole('link',{
            name:'Open New Account',
        });
        this.accountType=page.locator('#type');
        this.fromAccount=page.locator('#fromAccountId');
        this.openAccountButton=page.getByRole('button',{name:'Open New Account',});
    }

    async openNewAccount(){
        await this.OpenNewAccountLink.click();
        await this.accountType.selectOption('1');
        await this.fromAccount.selectOption({index:0});
        await this.openAccountButton.click();

    }
}

module.exports = { OpenNewAccountPage };