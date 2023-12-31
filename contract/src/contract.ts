// Find all our documentation at https://docs.near.org
import {
  NearBindgen,
  UnorderedMap,
  UnorderedSet,
  call,
  near,
  view,
} from "near-sdk-js";

@NearBindgen({})
class VotingContract {
  // Candidate Pair used to store Candidate Names and URL Links
  candidatePair = new UnorderedMap<string[]>("candidatePair");

  // Prompt Set
  promptSet = new UnorderedSet<string>("promptArray");

  // voteArray value stored in Map
  voteArray = new UnorderedMap<number[]>("voteArray");

  // Keeping track of user participation
  userParticipation = new UnorderedMap<string[]>("userParticipation");

  // Call Methods

  @call({})
  addCandidatePair({
    prompt,
    name1,
    name2,
    url1,
    url2,
  }: {
    prompt: string;
    name1: string;
    name2: string;
    url1: string;
    url2: string;
  }) {
    this.candidatePair.set(prompt, [name1, url1, name2, url2]);
  }

  @call({})
  initializeVotes({ prompt }: { prompt: string }) {
    this.voteArray.set(prompt, [0, 0]);
  }

  @call({})
  addToPromptArray({ prompt }: { prompt: string }) {
    this.promptSet.set(prompt);
  }

  @call({})
  clearPromptArray() {
    this.promptSet.clear();
    this.candidatePair.clear();
    this.userParticipation.clear();
    this.voteArray.clear();
    near.log("Clearing Polls");
  }

  @call({})
  addVote({ prompt, index }: { prompt: string; index: number }) {
    let currentVotes = this.voteArray.get(prompt, { defaultValue: [0, 0] });
    currentVotes[index] = currentVotes[index] + 1;
    this.voteArray.set(prompt, currentVotes);
  }

  @call({})
  recordUser({ prompt, user }: { prompt: string; user: string }) {
    let currentArray = this.userParticipation.get(prompt, { defaultValue: [] });
    currentArray.includes(user) ? null : currentArray.push(user);
    this.userParticipation.set(prompt, currentArray);
  }

  // @call({}) // This method changes the state, for which it cost gas
  // set_greeting({ message }: { message: string }): void {
  //   near.log(`Saving greeting ${message}`);
  //   this.message = message;
  // }

  // View Methods

  @view({})
  getUrl({ prompt, name }: { prompt: string; name: string }): string {
    near.log(prompt);
    let candidateArray = this.candidatePair.get(prompt);
    return candidateArray[candidateArray.indexOf(name) + 1];
  }

  @view({})
  didParticipate({ prompt, user }: { prompt: string; user: string }): boolean {
    let promptUserList: string[] = this.userParticipation.get(prompt, {
      defaultValue: [],
    });
    return promptUserList.includes(user);
  }

  @view({})
  participationArray({ prompt }: { prompt: string }): string[] {
    return this.userParticipation.get(prompt);
  }

  @view({})
  getAllPrompts(): string[] {
    return this.promptSet.toArray();
  }

  @view({})
  getVotes({ prompt }: { prompt: string }): number[] {
    return this.voteArray.get(prompt, { defaultValue: [] });
  }

  @view({})
  getCandidatePair({ prompt }: { prompt: string }): string[] {
    let candidateArray = this.candidatePair.get(prompt, {
      defaultValue: ["n/a", "n/a", "n/a", "n/a"],
    });
    return [candidateArray[0], candidateArray[2]];
  }

  // @view({}) // This method is read-only and can be called for free
  // get_greeting(): string {
  //   return this.message;
  // }
}
