import * as vscode from 'vscode';

const companies = [
  "Afterpay - Shanghai",
  "Amazon - Beijing/Shanghai",
  "AMD - Shanghai",
  "ARM - Shanghai",
  "Airbnb - Beijing",
  "Apple - Beijing/Shanghai",
  "ArcSoft - Hangzhou",
  "Autodesk - Beijing/Shanghai",
  "Booking - Shanghai",
  "Citrix - Nanjing",
  "Cisco - Beijing/Shanghai/Hangzhou/Suzhou",
  "Coolapk (酷安) - Beijing/Shenzhen",
  "Coupang - Beijing/Shanghai",
  "CSTC (花旗金融) - Shanghai",
  "Douban (豆瓣) - Beijing",
  "eBay - Shanghai",
  "eHealth - Xiamen",
  "Electronic Arts - Shanghai",
  "EMC - Shanghai",
  "Ericsson - Shanghai",
  "FreeWheel - Beijing",
  "GE - Shanghai",
  "Google - Beijing/Shanghai",
  "Grab - Beijing",
  "Honeywell - Shanghai",
  "HP - Shanghai",
  "HSBC - Shanghai/Guangzhou/Xi'an",
  "Hulu - Beijing",
  "IBM (except GBS) - Shanghai",
  "iHerb - Shanghai",
  "Intel - Shanghai",
  "LeetCode - Shanghai",
  "Linkedin - Beijing",
  "Microsoft - Beijing/Shanghai/Suzhou",
  "MicroStrategy - Hangzhou",
  "National Instruments - Shanghai",
  "Nokia - Nanjing/Hangzhou",
  "NVIDIA - Beijing/Shanghai",
  "Oracle - Shanghai",
  "PayPal - Shanghai",
  "Pivotal - Beijing/Shanghai",
  "Qualcomm - Beijing/Shanghai",
  "Red Hat - Beijing/Shanghai/Shenzhen/Xi'an/Remote",
  "RingCentral - Xiamen/Hangzhou/HongKong",
  "SAP - Shanghai",
  "Shopee - Shenzhen",
  "SmartNews - Beijing/Shanghai",
  "Snap - Beijing/Shenzhen",
  "State Street - Hangzhou",
  "SUSE - Beijing/Shanghai/Shenzhen",
  "ThoughtWorks - Xi'an/Beijing/Shenzhen/Chengdu/Wuhan/Shanghai/HongKong",
  "Trend Micro - Nanjing",
  "TuSimple - Beijing",
  "Ubisoft - Shanghai",
  "Unity - Shanghai",
  "Vipshop (唯品会) - Shanghai",
  "VMware - Beijing/Shanghai",
  "WeWork - Shanghai",
  "Wish - Shanghai",
  "Works Applications - Shanghai",
  "XMind - Shenzhen",
  "Zhihu (知乎) - Beijing",
  "Zoom - Hefei/Hangzhou/Suzhou"
];

export class CompanyTreeDataProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<vscode.TreeItem[]> {
    const list: vscode.TreeItem[] = [];

    for (const company of companies) {  
      list.push({
        label: company,
        iconPath: new vscode.ThemeIcon('circle-outline'),
      });
    }

    return Promise.resolve(list);
  }
}