import os

os.environ['PYTEST_RUNNING'] = 'true'

from core.accounts.tests.fixtures import *  # noqa: F401, F403, E402
from core.diabetApi.tests.fixtures import *  # noqa: F401, F403, E402
from core.glucoseLevelApp.tests.fixtures import *  # noqa: F401, F403, E402
from core.insulineDozes.tests.fixtures import *  # noqa: F401, F403, E402
from core.mealApp.tests.fixtures import *  # noqa: F401, F403, E402
