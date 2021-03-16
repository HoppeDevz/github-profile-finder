function gotoGitHubProfile() {
    const github_profile_name = document.querySelector(".github-profile-name").value;
    window.open(`http://github.com/${github_profile_name}`);
}