import { render } from "enzyme";
import React from "react";
import { expect } from "chai";

import Layout from "../../../../components/common/layouts/Layout";
import DigHeader from "../../../../components/common/DigHeader";

describe("Layout Render", () => {
  describe("Layout Structure", () => {
    let layout;

    beforeEach(() => {
      layout = render(<Layout />);
    });

    it("should contain one footer", () => {
      expect(layout.find("footer").length).to.equal(1);
    });

    it("should contain one section", () => {
      expect(layout.find("section").length).to.equal(1);
    });
  });

  describe("Header Render", () => {
    it("should contain default Header when no header provided", () => {
      const layout = render(<Layout />);
      expect(layout.find("#header").length).to.equal(1);
    });

    it("should contain DigHeader when provided one", () => {
      const header = <DigHeader />;
      const layout = render(<Layout header={header} />);

      expect(layout.find("#dig-header").length).to.equal(1);
      expect(layout.find("#header").length).to.equal(0);
    });
  });

  describe("Children Render", () => {
    it("should render children", () => {
      const layout = render(
        <Layout>
          <h1>Check this out</h1>
        </Layout>
      );

      expect(layout.find("section > h1").length).to.equal(1);
      expect(layout.find("section > h1").text()).to.have.string(
        "Check this out"
      );
    });
  });
});
