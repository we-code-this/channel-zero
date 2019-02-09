import { Card, Content } from "react-bulma-components";
import ReleaseCreditList from "./ReleaseCreditList";
import EndorsementList from "./EndorsementList";

import staticPaths from "../../lib/paths/static";

const ReleaseCard = ({ release }) => (
  <Card>
    <Card.Image
      src={staticPaths.release(release.filename)}
      alt={`${release.artist.name} - ${release.title}`}
    />
    <Card.Content>
      <Content>
        <ReleaseCreditList credits={release.credits} label={release.label} />
        {release.credits.length ? <hr /> : ""}
        <EndorsementList endorsements={release.endorsements} />
      </Content>
    </Card.Content>
  </Card>
);

export default ReleaseCard;
