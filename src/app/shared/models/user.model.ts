export class User {
  constructor(public id?: string, public display?: string, public user?: any) {
    this.id = id ? id : "UnknownID";
    this.display = display ? display : "Unknown User";
    this.user = user;
  }
}


export interface IAuthInfo {
  id: string;
  password: string;
  saveSession: boolean;
}

export class AuthInfoFromUser implements IAuthInfo{
  constructor(public id: string, public password: string, public saveSession: boolean){
  }
}

export class VerifiedUser {
  constructor(
    public createdAt: number,
    public displayName: string | undefined | null,
    public email: string | undefined | null,
    public emailVerified: boolean | undefined,
    public isAnonymous: boolean | undefined,
    public lastLoginAt: string | undefined | null,
    public photoURL: string | undefined | null,
    public providerData: any,
    public stsTokenManager: any,
    public tenantId: string | undefined | null,
    public uid: string | undefined | null,
    public phoneNumber: string | undefined | null,
    public logins: number[]
  ) {
  }

}

export class InAppAlias {
  constructor(public alias: User) {
  }
}

export class ProviderData {
  constructor(
    public displayName: string,
    public email: string,
    public phoneNumber: string,
    public photoURL: string,
    public providerId: string,
    public uid: string,
  ) {

  }
}

export class AuthEmailCredential {
  constructor(public email: string) {
  }
}
