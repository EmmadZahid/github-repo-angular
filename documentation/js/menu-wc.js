'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">github-repo-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-c44c3aed8582ab81e19f1bf764dd124b386ea419be1d0179aa1fb99f8f4a72e9ab15c8a87d55150c9802f127e269d06a73e1a9e84ab2e2c6cdbb00fca0ab6b1f"' : 'data-bs-target="#xs-components-links-module-AppModule-c44c3aed8582ab81e19f1bf764dd124b386ea419be1d0179aa1fb99f8f4a72e9ab15c8a87d55150c9802f127e269d06a73e1a9e84ab2e2c6cdbb00fca0ab6b1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c44c3aed8582ab81e19f1bf764dd124b386ea419be1d0179aa1fb99f8f4a72e9ab15c8a87d55150c9802f127e269d06a73e1a9e84ab2e2c6cdbb00fca0ab6b1f"' :
                                            'id="xs-components-links-module-AppModule-c44c3aed8582ab81e19f1bf764dd124b386ea419be1d0179aa1fb99f8f4a72e9ab15c8a87d55150c9802f127e269d06a73e1a9e84ab2e2c6cdbb00fca0ab6b1f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommitsModule.html" data-type="entity-link" >CommitsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CommitsModule-2f9088df8e28fabdc24cf73eca2c3bd99aaf95b76b7e366fb6237e1d72d6a39318c7334854b435bf1568bbf3f376e190bde0186dfc91e673fc25839ab1b6308f"' : 'data-bs-target="#xs-components-links-module-CommitsModule-2f9088df8e28fabdc24cf73eca2c3bd99aaf95b76b7e366fb6237e1d72d6a39318c7334854b435bf1568bbf3f376e190bde0186dfc91e673fc25839ab1b6308f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommitsModule-2f9088df8e28fabdc24cf73eca2c3bd99aaf95b76b7e366fb6237e1d72d6a39318c7334854b435bf1568bbf3f376e190bde0186dfc91e673fc25839ab1b6308f"' :
                                            'id="xs-components-links-module-CommitsModule-2f9088df8e28fabdc24cf73eca2c3bd99aaf95b76b7e366fb6237e1d72d6a39318c7334854b435bf1568bbf3f376e190bde0186dfc91e673fc25839ab1b6308f"' }>
                                            <li class="link">
                                                <a href="components/CommitsMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommitsMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommitsRoutingModule.html" data-type="entity-link" >CommitsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReposModule.html" data-type="entity-link" >ReposModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ReposModule-d51f518b858e0fdb61c4912824bc8fab4b022f013de10c8e43929ae66fb51e316d0ff2c8bf72b3f46e58abc424b26260f0430f59daef2f3a0ae5e0f0ecc72a72"' : 'data-bs-target="#xs-components-links-module-ReposModule-d51f518b858e0fdb61c4912824bc8fab4b022f013de10c8e43929ae66fb51e316d0ff2c8bf72b3f46e58abc424b26260f0430f59daef2f3a0ae5e0f0ecc72a72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReposModule-d51f518b858e0fdb61c4912824bc8fab4b022f013de10c8e43929ae66fb51e316d0ff2c8bf72b3f46e58abc424b26260f0430f59daef2f3a0ae5e0f0ecc72a72"' :
                                            'id="xs-components-links-module-ReposModule-d51f518b858e0fdb61c4912824bc8fab4b022f013de10c8e43929ae66fb51e316d0ff2c8bf72b3f46e58abc424b26260f0430f59daef2f3a0ae5e0f0ecc72a72"' }>
                                            <li class="link">
                                                <a href="components/ReposMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReposMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReposRoutingModule.html" data-type="entity-link" >ReposRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-68815c529695e92a655ea849f7efe6ce67bc82a7c28d8f5c4975425082d653b82375e8a3590a27c8f91d9237510129d7e027296d325bf606549a549b7967ebbe"' : 'data-bs-target="#xs-components-links-module-SharedModule-68815c529695e92a655ea849f7efe6ce67bc82a7c28d8f5c4975425082d653b82375e8a3590a27c8f91d9237510129d7e027296d325bf606549a549b7967ebbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-68815c529695e92a655ea849f7efe6ce67bc82a7c28d8f5c4975425082d653b82375e8a3590a27c8f91d9237510129d7e027296d325bf606549a549b7967ebbe"' :
                                            'id="xs-components-links-module-SharedModule-68815c529695e92a655ea849f7efe6ce67bc82a7c28d8f5c4975425082d653b82375e8a3590a27c8f91d9237510129d7e027296d325bf606549a549b7967ebbe"' }>
                                            <li class="link">
                                                <a href="components/TableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/_BasePageComponent.html" data-type="entity-link" >_BasePageComponent</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/LoadManyResponseModel.html" data-type="entity-link" >LoadManyResponseModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommitsService.html" data-type="entity-link" >CommitsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepoService.html" data-type="entity-link" >RepoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Commit.html" data-type="entity-link" >Commit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Repo.html" data-type="entity-link" >Repo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepoOwner.html" data-type="entity-link" >RepoOwner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RepoQueryParams.html" data-type="entity-link" >RepoQueryParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestQueryParams.html" data-type="entity-link" >RequestQueryParams</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});