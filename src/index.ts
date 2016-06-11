var http = require('request').defaults({encoding: 'utf-8'});

class NodeWHM {

  private securityToken: string;
  private options: any = {
    apiType: 'json-api',
    version: '1'
  };

  constructor(
    private serverUrl: string,
    private username: string,
    private remoteAccessKey: string,
    options?: any
  ) {
    if(options){
      for(let param in options){
        this.options[param] = options[param];
      }
    }
    console.error('WHM ' + this.username + ':' + this.remoteAccessKey);
  }

  /**
   * Lists the accounts that you have now
   * @returns {Promise<any>}
   */
  listAccounts(){
    let url = 'listaccts';
    let options = this.getRequestOptions(url);
    return new Promise<any>(
      (resolve, reject) => {
        http.get(options, function(err, res, body){
          if(err) reject(err);
          else {
            resolve(body);
          }
        });
      }
    );
  }

  /**
   * List IP addresses available
   * @returns {Promise<any>}
   */
  listIPAddresses(){
    return new Promise<any>(
      (resolve, reject) => {
        http.get(this.getRequestOptions('listips'), function(err, res, body){
          if(err) reject(err);
          else resolve(body);
        });
      }
    );
  }

  /**
   * Create an account
   * @returns {Promise<any>}
   */
  createAccount(){
    return new Promise<any>(
      (resolve, reject) => {
        let opts = this.getRequestOptions('createacct');
        opts.url = opts.url + '&username=mytestacclol&domain=mytestacclo.com&password=hamalaskyadonut123&';
        http.get(opts, function(err, res, body){
          if(err) reject(err);
          else resolve(body);
        });
      }
    );
  }

  private getRequestOptions(url: string){
    return {
      url: this.serverUrl + '/' + this.options.apiType + '/' + url + '?api.version=' + this.options.version,
      headers: {
        Authorization: 'WHM ' + this.username + ':' + this.remoteAccessKey
      }
    }
  }
}

interface AccountData {
  email: string;
  user: string;
  ip: string;
  plan: string;
  domain: string;
  diskused: string;
  is_locked: number;
  maxaddons: string;
  maxsub: string;
  disklimit: string;
  maxparked: string;
  theme: string;
  outgoing_mail_hold: number;
  outgoing_mail_suspended: number;
  partition: string;
  owner: string;
  maxsql: string;
  max_email_per_hour: string;
  min_defer_fail_to_trigger_protection: string;
  suspendedtime: number;
  legacy_backup: number;
  maxpop: string;
  unix_startdate: number;
  suspendreason: string;
  startdate: string;
  backup: number;
  suspended: number;
  max_defere_fail_percentage: string;
  ipv6: any[],
  maxlst: string;
  shell: string;
  maxftp: string;
}

export = NodeWHM;