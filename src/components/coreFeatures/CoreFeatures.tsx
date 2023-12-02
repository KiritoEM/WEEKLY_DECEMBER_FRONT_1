interface Ipoints {
  text: string;
  title: string;
}

const CoreFeatures = (): JSX.Element => {
  const pointData: Ipoints[] = [
    {
      title: "Lead generation",
      text: "Guide Helps Companies Increase Customer & Agent Satisfaction, Also Reducing Support Costs.",
    },
    {
      title: "Team Email",
      text: "Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools.",
    },
  ];
  return (
    <section id="core-features">
      <div className="row gx-4">
        <div className="col-6">
          <div className="section-cover">
            <img src="/assets/Corefeature.png" alt="" />
          </div>
        </div>
        <div className="col-6">
          <div className="section-content">
            <div className="header">
              <h3>Allocate Leads and Simplify Lead Management</h3>
              <p>
                Unique and powerful suite of software to run your entire
                business, brought to you by a company with the long term vision
                to transform the way you work.
              </p>
            </div>
            <div className="points">
              {pointData.map((item, index) => (
                <div className="item" key={index}>
                  <div className="subtitle">
                    <h5>
                      <img src="/assets/point.png" alt="" className="mx-3" />
                      {item.title}
                    </h5>
                  </div>
                  <div className="text">
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg">
          <img src="/assets/bg-corefeatures.png" alt="" />
      </div> */}
    </section>
  );
};

export default CoreFeatures;
