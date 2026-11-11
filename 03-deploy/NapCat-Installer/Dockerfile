FROM mlikiowa/napcat-docker:latest
RUN mkdir -p /opt/napcat-app-backup && cp -a /app/. /opt/napcat-app-backup/
 RUN printf '%s\n' \
    '#!/bin/bash' \
    'if [ ! -f /app/NapCat.Shell.zip ]; then' \
    '    echo "[railway-fix] /app was wiped by volume, restoring..."' \
    '    cp -a /opt/napcat-app-backup/. /app/' \
    'fi' \
    'mkdir -p /app/napcat/config /app/.config/QQ' \
    'exec /app/entrypoint.sh "$@"' \
    > /railway-entrypoint.sh && chmod +x /railway-entrypoint.sh

ENTRYPOINT ["/railway-entrypoint.sh"]
