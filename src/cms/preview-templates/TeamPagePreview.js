import React from 'react';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS();

  return (
    <TeamPageTemplate
      content={widgetFor('body')}
      data={data}
    />
  );
}

export default TeamPagePreview;
