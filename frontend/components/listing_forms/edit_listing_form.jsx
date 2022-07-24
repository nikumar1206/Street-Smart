import React, { useEffect } from "react";
import ListingForm from "./listing_form";

function fetchEditForm(props) {
  useEffect(() => {
    props.fetchListing(props.match.params.listingId);
  }, []);

  if (props.listing) {
    return (
      <div className="fetchEditForm">
        <ListingForm
          action={props.processForm}
          formType={props.formType}
          listing={props.listing}
        />
      </div>
    );
  }
}

import { connect } from "react-redux";
import { updateListing, fetchListing } from "../../actions/listings_actions";
// import { fetchListing } from "../../actions/listings_actions";
const mSTP = (state, ownProps) => ({
  formType: "Update Listing",
  listing: state.entities.listings[ownProps.match.params.listingId],
});
const mDTP = (dispatch) => ({
  processForm: (listing) => dispatch(updateListing(listing)),
  fetchListing: (listing) => dispatch(fetchListing(listing)),
});

export default connect(mSTP, mDTP)(fetchEditForm);
