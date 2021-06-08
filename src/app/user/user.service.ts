import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { users } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private userUrl: string = "http://localhost:3100/api/users";

  constructor(private httpClient: HttpClient) {}

  retriveAll(): Observable<users[]> {
    return this.httpClient.get<users[]>(this.userUrl);
  }

  retrieveById(id: number): Observable<users> {
    return this.httpClient.get<users>(`${this.userUrl}/${id}`);
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.userUrl}/${id}`);
  }

  save(user: users): Observable<users> {
    if (user.id) {
      return this.httpClient.put<users>(`${this.userUrl}/${user.id}`, user);
    } else {
      return this.httpClient.post<users>(`${this.userUrl}`, user);
    }
  }
}
