import Association from "./Association";

const ResultsAssociations = ({ filteredAssociationsArray }) => {
  return (
    <div>
      {!filteredAssociationsArray.length ? (
        <h1>No associations found</h1>
      ) : (
        filteredAssociationsArray.map((association) => (
          <Association
            associationName={association.associationName}
            location={`${association.country}, ${association.state}, ${association.city}`}
            photo={association.photo}
            id={association.id}
            key={association.id}
            contactPhone={association.contactPhone}
            contactEmail={association.contactEmail}
          />
        ))
      )}
    </div>
  );
};

export default ResultsAssociations;
