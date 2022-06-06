import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../../services/teams.service';
import { Team } from '../../models/team.interface';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team!: Team;

  constructor(
    private teamsService: TeamsService,
    //to read parameter from url
    private activatedRoute: ActivatedRoute,
    // to redirect the user of this view if we dont have a valid identifier
    private router: Router
  ) { }

  ngOnInit(): void {
                                                                                    //indicamos as string para forzar que el parámetro solo string y no null también para que no de fallo al llamar al getimagebyid
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')!;   //el nombre de la variable debe ser el mismo que se le pasa por ruta
    console.log('Identifier --> ', identifier);                                     //https://bobbyhadz.com/blog/typescript-type-null-is-not-assignable-to-type-string

    this.teamsService.getTeamById(identifier).subscribe((team) => {

      if (!team) {
        return this.router.navigateByUrl('/');
      }

      this.team = Object.values(team)[0];
      console.log('Team -->', this.team);

      return null;    //se añade para que no de error la función y devuelva siempre algo
    })
  }

}
