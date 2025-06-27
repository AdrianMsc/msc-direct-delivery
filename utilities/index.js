toggleSideNav = () => {
  const body = document.querySelector("body");
  const sidebar = document.querySelector("#msc-sidebar");
  body.classList.toggle("overflow-hidden");
  sidebar.classList.toggle("-translate-x-full");
  sidebar.classList.toggle("transform-none");
};

const sideNav = `
  <ul class="space-y-1 font-normal text-sm">
    <!-- GETTING STARTED -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Start Here</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-example" class="py-2 space-y-2">
        <li>
          <a
            href="component-status.html"
            class="flex items-center w-full px-2 text-gray-900 transition duration-75 rounded-lg pl-5 group hover:bg-gray-100"
          >
            Component Status
          </a>
        </li>
      </ul>
    </li>
    <!-- FOUNDATIONS  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-foundations"
        data-collapse-toggle="dropdown-foundations"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Foundations</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-foundations" class="py-2 space-y-2">
        <li>
          <a
            href="colors.html"
            class="flex items-center p-x2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Colors</span>
          </a>
        </li>

        <li>
          <a
            href="shadows.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Shadows</span>
          </a>
        </li>

        <li>
          <a
            href="typography.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Typography</span>
          </a>
        </li>

        <li>
          <a
            href="spacing.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Spacing</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- ACTION  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-action"
        data-collapse-toggle="dropdown-action"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Action</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-action" class="py-2 space-y-2">
        <li>
          <a
            href="buttons.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Buttons</span>
          </a>
        </li>
        <li>
          <a
            href="drop-down.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Drop Down</span>
          </a>
        </li>
        <li>
          <a
            href="filter.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Filter</span>
          </a>
        </li>
        <li>
          <a
            href="link.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Link</span>
          </a>
        </li>

        <li>
          <a
            href="cart-action-bar.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Cart Action Bar</span>
          </a>
        </li>
        <li>
          <a
            href="tabs.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Tabs</span>
          </a>
        </li>
      </ul>
    </li>
    <!-- FORM -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-form"
        data-collapse-toggle="dropdown-form"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Form</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-form" class="py-2 space-y-2">
        <li>
          <a
            href="inputs.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Inputs</span>
          </a>
        </li>
        <li>
          <a
            href="toggle.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Toggle</span>
          </a>
        </li>
        <li>
          <a
            href="checkbox.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Checkbox</span>
          </a>
        </li>

        <li>
          <a
            href="radio.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Radio</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- INDICATOR  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-indicator"
        data-collapse-toggle="dropdown-indicator"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Indicator</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-indicator" class="py-2 space-y-2">
        <li>
          <a
            href="spinner.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Spinner</span>
          </a>
        </li>

         <li>
          <a
            href="alerts.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Alerts</span>
          </a>
        </li>
         <li>
          <a
            href="404.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Error 404</span>
          </a>
        </li>
         <li>
          <a
            href="page-down.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Page Down</span>
          </a>
        </li>
      </ul>
      
    </li>

    <!-- LAYOUT  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-layout"
        data-collapse-toggle="dropdown-layout"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Layout</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-layout" class="py-2 space-y-2">
        <li>
          <a
            href="dividers.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Dividers</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- NAVIGATION  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-overlay"
        data-collapse-toggle="dropdown-overlay"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Navigation</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-overlay" class="py-2 space-y-2">
        <li>
          <a
            href="alphabetical-pager.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Alphabetic Pager</span>
          </a>
        </li>
        <li>
          <a
            href="breadcrumb.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Breadcrumb</span>
          </a>
        </li>
        <li>
          <a
            href="pagination.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Pagination</span>
          </a>
        </li>
      </ul>
    </li>

    <!-- OVERLAY  -->
    <li>
      <button
        type="button"
        class="flex items-center w-full px-2 text-sm font-bold text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
        aria-controls="dropdown-overlay"
        data-collapse-toggle="dropdown-overlay"
      >
        <span class="flex-1 text-left rtl:text-right whitespace-nowrap"
          >Overlay</span
        >
        <img
          class="flex-shrink-0 w-3 h-3"
          width="24"
          height="24"
          src="../assets/icons/chevron-down.svg"
        />
      </button>
      <ul id="dropdown-overlay" class="py-2 space-y-2">
        <li>
          <a
            href="modal.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Modal</span>
          </a>
        </li>

        <li>
          <a
            href="dialog.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Dialog</span>
          </a>
        </li>
        <li>
          <a
            href="table.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Table Modal</span>
          </a>
        </li>
        <li>
          <a
            href="modal-discount.html"
            class="flex items-center px-2 text-gray-900 rounded-lg pl-5 hover:bg-gray-100 group"
          >
            <span class="flex-1 ms-3 whitespace-nowrap">Mail List Modals</span>
          </a>
        </li>
      </ul>
    </li>
  </ul>
`;

createPagesSidenav = () => {
  const isSidenav = document.getElementById("sidenav-menu");
  isSidenav ? (isSidenav.innerHTML = sideNav) : null;
};

createPagesSidenav();
