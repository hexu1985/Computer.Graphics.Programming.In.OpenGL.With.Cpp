(function() {
  'use strict';

  const url_re = /cmake\.org\/cmake\/help\/(git-stage|git-master|latest|(v\d\.\d+))\//;
  const all_versions = {
    'git-stage': 'git-stage',
    'git-master': 'git-master',
    'latest': 'latest release',
    'v3.30': '3.30',
    'v3.29': '3.29',
    'v3.28': '3.28',
    'v3.27': '3.27',
    'v3.26': '3.26',
    'v3.25': '3.25',
    'v3.24': '3.24',
    'v3.23': '3.23',
    'v3.22': '3.22',
    'v3.21': '3.21',
    'v3.20': '3.20',
    'v3.19': '3.19',
    'v3.18': '3.18',
    'v3.17': '3.17',
    'v3.16': '3.16',
    'v3.15': '3.15',
    'v3.14': '3.14',
    'v3.13': '3.13',
    'v3.12': '3.12',
    'v3.11': '3.11',
    'v3.10': '3.10',
    'v3.9': '3.9',
    'v3.8': '3.8',
    'v3.7': '3.7',
    'v3.6': '3.6',
    'v3.5': '3.5',
    'v3.4': '3.4',
    'v3.3': '3.3',
    'v3.2': '3.2',
    'v3.1': '3.1',
    'v3.0': '3.0',
  };

  function build_select(current_version, current_release) {
    let buf = ['<select>'];

    Object.entries(all_versions).forEach(([version, title]) => {
      buf.push('<option value="' + version + '"');
      if (version === current_version) {
        buf.push(' selected="selected">');
        if (version[0] == 'v') {
          buf.push(current_release);
        } else {
          buf.push(title + ' (' + current_release + ')');
        }
      } else {
        buf.push('>' + title);
      }
      buf.push('</option>');
    });

    buf.push('</select>');
    return buf.join('');
  }

  function patch_url(url, new_version) {
    return url.replace(url_re, 'cmake.org/cmake/help/' + new_version + '/');
  }

  function on_switch() {
    const selected = this.options[this.selectedIndex].value;
    const url = window.location.href;
    const new_url = patch_url(url, selected);

    if (new_url != url) {
      // check beforehand if url exists, else redirect to version's start page
      fetch(new_url)
        .then((response) => {
          if (response.ok) {
            window.location.href = new_url;
          } else {
            throw new Error(`${response.status} ${response.statusText}`);
          }
        })
        .catch((error) => {
          window.location.href = 'https://cmake.org/cmake/help/' + selected;
        });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    let match = url_re.exec(window.location.href);
    if (match) {
      const release = DOCUMENTATION_OPTIONS.VERSION;
      const version = match[1];
      const select = build_select(version, release);
      document.querySelectorAll('.version_switch').forEach((placeholder) => {
        placeholder.innerHTML = select;
        let selectElement = placeholder.querySelector('select');
        selectElement.addEventListener('change', on_switch);
      });
      document.querySelectorAll('.version_switch_note').forEach((placeholder) => {
        placeholder.innerHTML = 'Or, select a version from the drop-down menu above.';
      });
    }
  });
})();
