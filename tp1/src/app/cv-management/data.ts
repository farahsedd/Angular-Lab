import type {Cv} from "./Cv";

class DataService {
  public cvs: Cv[] = [];
  public embauchees: Cv[] = [];
}

export const dataService = new DataService();
