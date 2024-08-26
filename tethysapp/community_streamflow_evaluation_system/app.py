from tethys_sdk.base import TethysAppBase

class CSES(TethysAppBase):
    """
    Tethys app class for Map Layout Tutorial.
    """

    name = 'Community Streamflow Evaluation System (CSES)'
    package = 'community_streamflow_evaluation_system'
    index = 'home'
    icon = f'{package}/images/CSESoverviewImage.JPG' 
    root_url = 'community-streamflow-evaluation-system' 
    color = '#003087'
    description = (
        '"A tethys app that lets the user to visualize and query modeled streamflow'
    )
    tags = '"Hydrology", "WMO", "UA"'
    enable_feedback = False
    feedback_emails = []
    controller_modules = ["controllers", "State_Controller", "Reach_Controller", "HUC_Controller"]