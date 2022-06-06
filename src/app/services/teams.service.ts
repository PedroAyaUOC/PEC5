import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../models/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('https://myfakeapi.com/api/football/teams ');
  }
  
  getTeamById(id: string): Observable<Team> {
    return this.http.get<Team>('https://myfakeapi.com/api/football/teams/' + id );
  }
}


/*
  https://myfakeapi.com/api/football/teams 
  https://myfakeapi.com/api/football/teams/1
*/