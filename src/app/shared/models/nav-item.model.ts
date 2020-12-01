export class NavItem {
  constructor(public id: string, public display: string,
    public url: string, public disabled: boolean = false, public iconName?: string) {

  }
}

export class NavHeaderList {
  constructor(public header: NavHeader, public links: NavHeaderLink[]) {
  }
}

export class NavHeader {
  constructor(public display: string) {
  }
}

export class NavHeaderLink {
  constructor(public display: string, public iconName: string, public url: string[]) {
  }
}

export class MenuItem {
  constructor(public iconName: string, public display: string, public id: string, public disabled?: boolean) {

  }
}
