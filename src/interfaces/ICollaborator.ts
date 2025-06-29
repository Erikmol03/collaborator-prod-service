interface CollaboratorAttributes {
  id_collaborator: Number;
  id_onboarding: Number;
  first_name: String;
  last_name: String;
  email: String;
  date_entry: Date;
  state_welcome_onboarding: boolean;
  state_technical_onboarding: Boolean;
  date_technical_onboarding?: Date;
}
