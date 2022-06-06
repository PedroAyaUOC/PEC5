import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/team.interface';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any;
  processing!: boolean;

  constructor(
    private teamsService: TeamsService,
    private router: Router,
  ) {

    this.processing = true;
  }

  ngOnInit(): void {
    this.teamsService
      .getAllTeams()
      .subscribe((teams) => {
        this.teams = Object.values(teams)[0];
        this.processing = false;
        console.log(this.teams);
      });
  }

  verEquipo(id:string){
    this.router.navigateByUrl('/team/' + id);
  }

}
