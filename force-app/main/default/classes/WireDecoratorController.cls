public with sharing class WireDecoratorController {
    @AuraEnabled(cacheable=true)
    public static Account getAccount(){
        try {
            return [SELECT Id, Name FROM Account LIMIT 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static Contact getContact(String accName){
        try {
            return [SELECT Id, FirstName, LastName FROM Contact WHERE Account.Name = :accName LIMIT 1];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
