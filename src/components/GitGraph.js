const { Gitgraph } = require("@gitgraph/react");

function GitGraph() {
  return (
    <Gitgraph>
      {(gitgraph) => {
        // Simulate git commands with Gitgraph API.
        const master = gitgraph.branch("master");
        master.commit("Initial commit");

        const develop = master.branch("develop");
        develop.commit("Initiate new development");

        const feature01 = develop.branch("feature#01");
        feature01
          .commit("Make it work")
          .commit("Make it right")
          .commit("Make it fast");
        develop.merge(feature01);
        // feature01.delete()

        const feature02 = develop.branch("feature#02");
        feature02
          .commit("Make it work")
          .commit("Make it right")
          .commit("Make it fast");
        develop.merge(feature02);
        // feature02.delete()

        const release = develop.branch("Release");
        // release.commit("Prepare next version");

        release.merge(develop)
        release
          .commit("Release v1");

        const defect01 = release.branch("defect#01");
        defect01
          .commit("Defect correction");
        release.merge(defect01);
        // defect01.delete()

        develop.merge(release);
        master.merge(release).tag("v1.0.0");;
        // release.delete()

      }}
    </Gitgraph>
  );
}

export default GitGraph;