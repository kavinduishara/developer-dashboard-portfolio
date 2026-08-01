export const research = {
  title: "QoS-Aware Distributed Query Processing System",
  subtitle:
    "Adaptive query decomposition and LinUCB-based cut-point selection for reducing communication overhead and execution latency in distributed SQL environments.",
  repositoryUrl: "https://github.com/kavinduishara/final_year_research",
  summary:
    "This research proposes a QoS-aware distributed query processing framework that optimizes SQL query execution through adaptive query decomposition and execution strategy selection. It preprocesses queries with Apache Calcite to generate logical plans, identifies candidate cut points at join operators, and uses a LinUCB contextual bandit to learn from execution feedback and select efficient cut points based on data locality and transfer cost. Evaluated on a two-node distributed PostgreSQL cluster with TPC-H workloads, the adaptive approach consistently reduces unnecessary data transfer and improves query execution performance over static cost-based policies.",
  problem:
    "Distributed databases improve scalability by partitioning data across nodes, but SQL queries spanning multiple nodes incur significant communication overhead and latency. Conventional distributed query optimizers rely on static cost models and cardinality estimates that often fail to reflect actual runtime conditions under dynamic network latency, data locality, and workload variation. As a result, the estimated optimal plan may not deliver the best observed performance, making it difficult to consistently meet QoS objectives such as low execution time and reduced communication cost.",
  objective:
    "Design and evaluate a QoS-aware distributed query processing framework that dynamically optimizes SQL query execution across distributed environments by combining logical query planning (Apache Calcite), locality-aware transfer-cost estimation, and a LinUCB contextual bandit that continuously improves cut-point selection from execution feedback, thereby minimizing query execution time and communication overhead.",
  technologies: [
    "PostgreSQL",
    "Apache Calcite",
    "LinUCB Contextual Bandit",
    "Machine Learning",
    "Distributed SQL",
    "TPC-H",
    "Query Planning",
    "Docker",
  ],
  goals: [
    "Model query execution as distributed workflows with measurable QoS constraints (execution time and communication overhead).",
    "Identify candidate cut points at join operators and evaluate alternative decomposition strategies using data locality and transfer cost.",
    "Compare static QoS-based planning decisions with LinUCB learning-assisted optimization using real execution feedback.",
    "Demonstrate reduced response time and unnecessary data movement on a multi-node PostgreSQL deployment under TPC-H workloads.",
  ],
  architecture: [
    {
      title: "Query Preprocessing (Apache Calcite)",
      description:
        "Parses incoming SQL queries, generates logical execution plans, and identifies join operators as candidate cut points that partition the plan into executable sub-plans.",
    },
    {
      title: "Candidate Cut Analysis",
      description:
        "Extracts planner statistics (cardinality, operator cost), plan depth, estimated base-table and intermediate-result transfer costs, and data-locality indicators to build a context vector for each candidate cut.",
    },
    {
      title: "Adaptive Strategy Selection (LinUCB)",
      description:
        "Uses a LinUCB contextual bandit trained on execution rewards (negative total runtime including transfer) to select the cut with the highest Upper Confidence Bound score, balancing exploration and exploitation.",
    },
    {
      title: "Distributed Execution & Feedback",
      description:
        "Executes the selected fragments on worker nodes, materializes and transfers intermediate results when needed, logs performance metrics, and updates the LinUCB model for future decisions.",
    },
  ],
  methodology: [
    {
      title: "Logical Plan Generation & Cut Identification",
      description:
        "Use Apache Calcite to produce logical plans and treat join operators as candidate decomposition points; construct a 10-dimensional feature vector (cardinality, depth, planner cost, transfer costs, locality indicators) for each cut.",
    },
    {
      title: "Transfer-Cost & Reward Modeling",
      description:
        "Estimate base-relation and intermediate-result transfer volumes; measure runtime and communication time after execution; define reward as negative total execution time (normalized) for LinUCB updates.",
    },
    {
      title: "LinUCB Training & Inference",
      description:
        "Initialize ridge-regularized parameters; during training execute candidate cuts and update A and b matrices from observed rewards; at inference select the cut maximizing the UCB score.",
    },
    {
      title: "Experimental Evaluation",
      description:
        "Deploy a two-worker-node distributed PostgreSQL environment; run TPC-H decision-support queries; compare the adaptive LinUCB strategy against a static QoS-based baseline under identical data distribution and conditions.",
    },
  ],
  metrics: [
    {
      label: "Total Execution Time",
      value: "Fragment runtime + communication (base + intermediate transfer) in milliseconds",
    },
    {
      label: "Improvement over Baseline",
      value: "Percentage reduction in total execution time versus static QoS policy (up to ~29%)",
    },
    {
      label: "Data Transfer Cost",
      value: "Volume of relocated base relations and intermediate results between worker nodes",
    },
    {
      label: "Cut-Point Selection Quality",
      value: "Ability of LinUCB to prefer context-dependent cuts that reduce unnecessary shipping",
    },
  ],
  contributions: [
    "A QoS-aware distributed query processing framework that integrates logical query planning with adaptive query decomposition.",
    "A locality-aware execution strategy that evaluates candidate decomposition points using communication cost and data placement.",
    "A LinUCB-based contextual bandit model that continuously improves cut-point selection from execution feedback.",
    "Experimental evidence on a distributed PostgreSQL + TPC-H setup showing consistent outperformance of static QoS baselines by reducing data movement and execution latency.",
  ],
  roadmap: [
    "Extend the framework to support multiple simultaneous query decomposition points.",
    "Scale evaluation to larger distributed clusters and richer network cost models.",
    "Assess performance on larger and more diverse benchmark workloads.",
    "Package reproducible benchmark scripts and execution traces for community validation.",
  ],
};