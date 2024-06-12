import { Injectable } from '@angular/core';

import UserExperior from "user-experior-web";


@Injectable({
    providedIn: 'root'
})
export class AppService {
    ueTracker: any;
    constructor() {

        // this.ueTracker = new UserExperior();
        // this.ueTracker.startRecording("app-verion-key");
    }
    
    setID(value: string, {}) {
        // this.ueTracker.setUserIdentifier(value, {});
    }
    
    // Add your service methods here
    logEvent(eventName: string, eventProperties: any) {
        // this.ueTracker.logEvent(eventName, eventProperties);
    }

    restartSession() {
        // this.ueTracker.restartSession();
    }
}