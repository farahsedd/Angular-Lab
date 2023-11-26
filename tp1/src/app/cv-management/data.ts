import type {Cv} from "./Cv";

class DataService {
  public cvs: Cv[] = [{
    id: "1",
    name: "Doe",
    firstname: "John",
    path: "https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg",
    job: "Développeur",
    description: "This is the job description",
    age: 20,
    cin: "12345678",
    followers: "20",
    following: "10",
    projects: "10"
  }, {
    id: "1",
    name: "Doe",
    firstname: "John 42",
    path: "https://brsc.sa.edu.au/wp-content/uploads/2018/09/placeholder-profile-sq.jpg",
    job: "Développeur",
    description: "This is the job description",
    age: 42,
    cin: "12345678",
    followers: "20",
    following: "10",
    projects: "10"
  }];
  public embauchees: Cv[] = [];
}

export const dataService = new DataService();
