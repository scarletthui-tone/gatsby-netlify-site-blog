import React from 'react';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();

  console.log(data);

  return (
    <TeamPageTemplate
      content={widgetFor('body')}
      {...data}
    />
  );
}

export default TeamPagePreview;
