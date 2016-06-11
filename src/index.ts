var http = require('request');

export class NodeWHM {

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
  }

  /**
   * Lists the accounts that you have now
   * @returns {Promise<any>}
   */
  listAccounts(){
    let url = this.serverUrl + '/' + this.options.apiType + '/listaccts?api.version=' + this.options.version;
    let options = {
      url: url,
      headers: {
        Authorization: 'WHM ' + this.username + ':' + this.remoteAccessKey
      }
    };
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
}

export = NodeWHM;